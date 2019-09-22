import React, { Component } from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout'; 
import SlateEditor from '../components/slate-editor/Editor';
import withAuth from '../components/hoc/withAuth';

class BlogEditor extends Component {
	render() {
		return (
			<BaseLayout {...this.props.auth}>
				<BasePage containerClass='editor-wrapper' className='blog-editor-page' title='Create a new blog post.'>		
					<SlateEditor />
				</BasePage>
			</BaseLayout>
		);
	}
}

export default withAuth('siteOwner')(BlogEditor);