import React, { Component } from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';
import withAuth from '../components/hoc/withAuth';

class Owner extends Component {
	render() {
		return (
			<BaseLayout {...this.props.auth}>
				<BasePage className='resume-page'>	
					<h1>Owner Page</h1>
				</BasePage>
			</BaseLayout>
		);
	}
}

const withSpecificAuth = withAuth('siteOwner');

export default withSpecificAuth(Owner);