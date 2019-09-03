import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'next/router';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';

class Portfolio extends Component {
	
	static async getInitialProps({ query }) {
		const portfolioId = query.id;
		let portfolio = {};

		try {
			const response = await axios.get(`http://jsonplaceholder.typicode.com/posts/${portfolioId}`);
			portfolio = response.data; 
		} catch(err) {
			console.error(err);
		}

		return { portfolio };
	}

	render() {
		const { portfolio } = this.props;

		return (
			<BaseLayout {...this.props.auth}>
				<BasePage className='portfolio-page'>	
					<h1>Portfolio Page</h1>
					<h2>{portfolio.title}</h2>
					<h2>{this.props.router.query.id}</h2>
				</BasePage>
			</BaseLayout>
		);
	}
}

export default withRouter(Portfolio);