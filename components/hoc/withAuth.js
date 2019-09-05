import React, { Component } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

const namespace = 'http://localhost:3000';

export default role => Component => 
	
	class withAuth extends Component {

		static async getInitialProps(args) {
			const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);
			return { ...pageProps };
		}

		renderProtectedPage() {
			//const { isAuthenticated } = this.props.auth;
			
			const { isAuthenticated, user } = this.props.auth;
			const userRole = user && user[`${namespace}/roles`];
			let isAuthorized = false;

			if (role) {
				if (userRole && userRole === role) {
					isAuthorized = true;
				}
			}
			else {
				isAuthorized = true;
			}


			if (!isAuthenticated) {
				return (
					<BaseLayout {...this.props.auth}>
						<BasePage>	
							<h1>Oops. You're not authorized to access this page. Log in and try again...</h1>
						</BasePage>
					</BaseLayout> 
				)
			}
			else if (!isAuthorized) {
				return (
					<BaseLayout {...this.props.auth}>
						<BasePage>	
							<h1>Oops. You're not authorized to access this page. Log in as a site owner to continue...</h1>
						</BasePage>
					</BaseLayout> 
				)
			}
			else {
				return (<Component {...this.props} />)
			}
		}

		render() {
			return this.renderProtectedPage();
		}
	}



// export default function(role) { 
// 	return function(Component) {
// 		return class withAuth extends Component {

// 			static async getInitialProps(args) {
// 				const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);
// 				return { ...pageProps };
// 			}

// 			renderProtectedPage() {
// 				//const { isAuthenticated } = this.props.auth;
				
// 				const { isAuthenticated, user } = this.props.auth;
// 				const userRole = user && user[`${namespace}/roles`];
// 				let isAuthorized = false;

// 				if (role) {
// 					if (userRole && userRole === role) {
// 						isAuthorized = true;
// 					}
// 				}
// 				else {
// 					isAuthorized = true;
// 				}


// 				if (!isAuthenticated) {
// 					return (
// 						<BaseLayout {...this.props.auth}>
// 							<BasePage>	
// 								<h1>Oops. You're not authorized to access this page. Log in and try again...</h1>
// 							</BasePage>
// 						</BaseLayout> 
// 					)
// 				}
// 				else if (!isAuthorized) {
// 					return (
// 						<BaseLayout {...this.props.auth}>
// 							<BasePage>	
// 								<h1>Oops. You're not authorized to access this page. Log in as a site owner to continue...</h1>
// 							</BasePage>
// 						</BaseLayout> 
// 					)
// 				}
// 				else {
// 					return (<Component {...this.props} />)
// 				}
// 			}

// 			render() {
// 				return this.renderProtectedPage();
// 			}
// 		}
// 	}
// }