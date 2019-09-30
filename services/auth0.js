import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { getCookieFromReq } from '../helpers/utils';

const CLIENT_ID  = process.env.CLIENT_ID;

class Auth0 {
	constructor() {
		this.auth0 = new auth0.WebAuth({
			domain: 'mattcarapella.auth0.com',
			clientID: CLIENT_ID,
			redirectUri: `${process.env.BASE_URL}/callback`,
			responseType: 'token id_token',	
			scope: 'openid profile'
		});

		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
		this.handleAuthentication = this.handleAuthentication.bind(this);
		// this.isAuthenticated = this.isAuthenticated.bind(this);
	}

	 handleAuthentication() {
		return new Promise((resolve, reject) => {
			this.auth0.parseHash((err, authResult) => {
				if (authResult && authResult.accessToken && authResult.idToken) {
					this.setSession(authResult);
					resolve();
				}
				else if (err) {
					reject(err);
					console.log(err);
				}
			});
		})	
	}

	setSession(authResult) {
		const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
		Cookies.set('jwt', authResult.idToken);
	}

	login() {
		this.auth0.authorize();
	}

	logout() {
		Cookies.remove('jwt');

		this.auth0.logout({
			returnTo: '',
			clientID: CLIENT_ID  
		})
	}

	// isAuthenticated() {
	// 	// Check if current time is past the access token's expiration time
	// 	const expiresAt = Cookies.getJSON ('expiresAt');
	// 	return new Date().getTime() < expiresAt;
	// }

	async getJWKS() {
		const res = await axios.get('https://mattcarapella.auth0.com/.well-known/jwks.json');
		const jwks = res.data;
		return jwks;
	}

	async verifyToken(token) {
		// Returns a user object if the jwt can be verifified and decoded
		// if (token) {
		// 	const decodedToken = jwt.decode(token);
		// 	const expiresAt = decodedToken.exp * 1000;
		// 	return (decodedToken && new Date().getTime() < expiresAt) ? decodedToken : undefined; 
		// }
		// return undefined;

		if (token) {
			const decodedToken = jwt.decode(token, { complete: true });
			if (!decodedToken) { return undefined }
			const jwks = await this.getJWKS();
			const jwk = jwks.keys[0];

			// Build a Certificate
			let cert = jwk.x5c[0];
			cert = cert.match(/.{1,64}/g).join('\n');
			cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;
		
			if (jwk.kid === decodedToken.header.kid) {
				try {
					const verifiedToken = jwt.verify(token, cert);
					const expiresAt = verifiedToken.exp * 1000;
					return (verifiedToken && new Date().getTime() < expiresAt) ? verifiedToken : undefined;
				}
				catch (err) {
					return undefined;
				}
			}
		}
		return undefined;
	}

	async clientAuth() {
		// debugger
		//return this.isAuthenticated();
		const token = Cookies.getJSON('jwt');
		const verifiedToken = await this.verifyToken(token);
		return verifiedToken;				// returns user object
	}

	async serverAuth(req) {
		if (req.headers.cookie) {
			// const expiresAtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('expiresAt='));
			// if (!expiresAtCookie) { return undefined }
			// const expiresAt = expiresAtCookie.split('=')[1];
			// return new Date().getTime() < expiresAt;
			
			// const tokenCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
			// if (!tokenCookie) { return undefined }
			// const token = tokenCookie.split('=')[1];
			
			const token = getCookieFromReq(req, 'jwt')
			const verifiedToken = await  this.verifyToken(token);
			return verifiedToken;			// returns user object
		}
		return undefined;
	}
}

const auth0Client = new Auth0(); 
export default auth0Client;