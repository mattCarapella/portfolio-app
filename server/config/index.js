if (process.env.NODE_ENV === 'production') {
	module.exports = requrie('./prod.js');
}
else {
	module.exports = require('./dev.js'); 
}