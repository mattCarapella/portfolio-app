import React, { Component } from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';

class Resume extends Component {
	render() {
		return (
			<BaseLayout {...this.props.auth}>
				<BasePage className='resume-page'>	
					<h1>Resume Page</h1>
				</BasePage>
			</BaseLayout>
		);
	}
}

export default Resume;