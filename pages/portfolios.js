import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '../routes';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';

class Portfolios extends Component {
	
	static async getInitialProps() {
		let posts = [];
		try {
			const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
			posts = response.data;
		} catch(err) {
			console.log(err )
		}
		return { posts: posts.splice(0, 10) };
	}

	renderPosts(posts) {
		return posts.map((post, index) => {
			return (
				<li key={index}>
					<Link route={`/portfolio/${post.id}`}>
						<a style={{'fontSize': '20px'}}> {post.title} </a>
					</Link>
				</li>
			)
		})
	}   

	render() {
		const { posts } = this.props;
		
		return (
			<BaseLayout {...this.props.auth}>
				<BasePage className='portfolios-page'>	
					<h1>Portfolios Page</h1>
					<ul>{ this.renderPosts(posts) }</ul>
				</BasePage>
			</BaseLayout>
		);
	}
}

export default Portfolios;