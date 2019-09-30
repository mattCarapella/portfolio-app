const prod = process.env.NODE_ENV === 'production';

module.exports = {
	'process.env.BASE_URL': prod ? 'https://mattcarapella.herokuapp.com' : 'http://localhost:3000',
	'process.env.NAMESPACE': 'https://mattcarapella.herokuapp.com',
	'process.env.CLIENT_ID': '1jPjIJ1sTXaYcj2yaNdes4cvJnvRPFA0'
}