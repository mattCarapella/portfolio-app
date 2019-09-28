import React, { Component } from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout'; 
import { getBlogBySlug } from '../actions';
import { Row, Col } from 'reactstrap';

class BlogDetail extends Component {
	
	getInitialProps() {

	}
	
	render() {
		return (
			<BaseLayout {...this.props.auth}>
				<BasePage className='blog-detail-page' title='Blog Detail Page...'>		
				</BasePage>
			</BaseLayout>
		);
	}
}
   
export default BlogDetail;