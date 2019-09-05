const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost:3000/';
// MIDDLEWARE

// exports.checkJWT = function(req, res, next) {
// 	const isValidToken = false;
// 	if (isValidToken) {
// 		next();
// 	}
// 	else {
// 		return res.status(401).send({ title: 'Not Authorized', details: 'Please log in and try again.' });
// 	}
// }

exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
	  cache: true,
	  rateLimit: true,
	  jwksRequestsPerMinute: 15,
	  jwksUri: 'https://mattcarapella.auth0.com/.well-known/jwks.json'
	}),
  audience: '1jPjIJ1sTXaYcj2yaNdes4cvJnvRPFA0',
  issuer: 'https://mattcarapella.auth0.com/',
  algorithms: ['RS256'] 
});

exports.checkRole = role => (req, res, next) => {
	const user = req.user;
	if (user && (user[namespace + 'role'] === role)) {
		next();
	}
	else {
		return res.status(401).send({ title: 'Not Authorized', description: 'You are not authorized to access this page.' });
	}
};