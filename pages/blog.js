import React, { Component } from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';

class Blog extends Component {
	render() {
		return (
			<BaseLayout>
				<BasePage className='blog-page'>
					<h1>Blog Page</h1>
				</BasePage>
			</BaseLayout>
		);
	}
}

export default Blog;