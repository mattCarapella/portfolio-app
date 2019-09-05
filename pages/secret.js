import React, { Component } from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';
import withAuth from '../components/hoc/withAuth';
import axios from 'axios';
import { getSecretData, getSecretDataServer } from '../actions';

class Secret extends Component {
	
	// constructor(props) {
	// 	super();
	// 	this.state = {
	// 		secretData: []
	// 	}
	// }	

	state = {
		secretData: []
	}

	static async getInitialProps({ req }) {
		const anotherSecretData = await getSecretData(req) ;
		return { anotherSecretData };
	}
	
	async componentDidMount() {
		const secretData = await getSecretData();
		this.setState({
			secretData
		});
	}

	displaySecretData() {
		const { secretData } = this.state;
		if (secretData && secretData.length > 0) {
			return secretData.map((data, index) => {
				return (
					<div key={index}>
						<p> { data.title } </p>
						<p> { data.description } </p>
					</div>
				);
			});
		}
		return null;
	}

	render() {
		const { secretData } = this.props;
		return (
			<BaseLayout {...this.props.auth}>
				<BasePage>	
					<h1>Secret  Page</h1>
					<h2>{ secretData }</h2>
					{ this.displaySecretData() }
				</BasePage>
			</BaseLayout>
		);
	}
}

export default withAuth(Secret);