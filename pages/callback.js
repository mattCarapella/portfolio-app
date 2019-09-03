import React, { Component } from 'react';
import { withRouter } from 'next/router';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';
import auth0Client from '../services/auth0';

class Callback extends Component {
	async componentDidMount() {
		await auth0Client.handleAuthentication();
		this.props.router.push('/');
	}	

	render() {
		return (
			<BaseLayout>
				<BasePage className='callback-page'>
					<h1>Verifying Login Data...</h1>
				</BasePage>
			</BaseLayout>
		);
	}
}

export default withRouter(Callback);