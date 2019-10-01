const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// MIDDLEWARE

exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
	  cache: true,
	  rateLimit: true,
	  jwksRequestsPerMinute: 50,
	  jwksUri: 'https://mattcarapella.auth0.com/.well-known/jwks.json'
	}),
  audience: '1jPjIJ1sTXaYcj2yaNdes4cvJnvRPFA0',
  issuer: 'https://mattcarapella.auth0.com/',
  algorithms: ['RS256'] 
});

exports.checkRole = role => (req, res, next) => {
	const user = req.user;
	if (user && (user[process.env.NAMESPACE + '/roles'] === role)) {
		next();
	}
	else {
		return res.status(401).send({ title: 'Not Authorized', description: 'You are not authorized to access this page.' });
	}
};