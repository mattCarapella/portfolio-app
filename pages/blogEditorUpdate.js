import React, { Component } from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout'; 
import SlateEditor from '../components/slate-editor/Editor';
import withAuth from '../components/hoc/withAuth';
import { getBlogById, updateBlog } from '../actions';
import { Router } from '../routes';
import { toast } from 'react-toastify';

class BlogEditorUpdate extends Component {

	static async getInitialProps({query}) {
		const blogId = query.id;
		let blog = {};

		try {
			blog = await getBlogById(blogId);
		} catch(err) {
			console.error(err);
		}
		return { blog };
	}

	constructor(props) {
		super(props);

		this.state = {
			isSaving: false
		}

		this.updateBlog = this.updateBlog.bind(this);
	}

	updateBlog(story, heading) {
		const { blog } = this.props;
    const updatedBlog = {};
    updatedBlog.title = heading.title;
    updatedBlog.subTitle = heading.subtitle;
    updatedBlog.story = story;

    this.setState({isSaving: true});

		updateBlog(updatedBlog, blog._id).then(updatedBlog => {
			toast.success('Blog saved.');
			this.setState({isSaving: false});
			Router.pushRoute(`/blogs`)
		}).catch(err => {
      this.setState({isSaving: false});
 			toast.error('There was an error with your submission.');
      const message = err.message || 'Server Error!';
			console.error(message);
		})
	}

	render() {
    const { blog } = this.props;
    const { isSaving } = this.state;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <SlateEditor initialValue={blog.story} isLoading={isSaving} save={this.updateBlog} />
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(BlogEditorUpdate);