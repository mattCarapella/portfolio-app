import React, { Component } from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';
import { Link } from '../routes';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';
import { getBlogs } from '../actions';

class Blog extends Component {

	static async getInitialProps({req}) {
    let blogs = [];
		try {
      blogs = await getBlogs(req);
    } catch(err) {
      console.error(err);
    }

    return {blogs};
  }
	
	renderBlogs = (blogs) => (
    blogs.map((blog, index) => (
      <div key={index} className="post-preview">
        <Link route={`/blogs/${blog.slug}`}>
          <a>
            <h2 className="post-title">
              {blog.title}
            </h2>
            <h3 className="post-subtitle">
              {blog.subTitle}
            </h3>
          </a>
        </Link>
        <p className="post-meta">Posted by
          <a href="#"> {blog.author} </a>
          {moment(blog.createdAt).format('LLLL')}</p>
      </div>
      )
    )
  )

	render() {
		const {blogs} = this.props;
	

		return (
			<BaseLayout headerType={'landing'} className="blog-listing-page">
			  <div className="masthead" style={{"backgroundImage": "url('/static/images/project_01.jpg')"}}>
			    <div className="overlay"></div>
			    <Container>
			      <div className="row">
			        <div className="col-lg-8 col-md-10 mx-auto">
			          <div className="site-heading">
			            <h1>Blog</h1>
			            <span className="subheading">Programming, Life, and More...</span>
			          </div>
			        </div>
			      </div>
			    </Container>
			  </div>
			  <BasePage className="blog-body">
			    <Row>
            <Col md="10" lg="8" className="mx-auto">
              {
                this.renderBlogs(blogs)
              }
              <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
              </div>
            </Col>
          </Row>

			    <footer>
			      <Container>
			        <Row>
			          <div className="col-lg-8 col-md-10 mx-auto">
			            <ul className="list-inline text-center">
			              <li className="list-inline-item">
			                <a href="#">
			                  <span className="fa-stack fa-lg">
			                    <i className="fas fa-circle fa-stack-2x"></i>
			                    <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
			                  </span>
			                </a>
			              </li>
			              <li className="list-inline-item">
			                <a href="#">
			                  <span className="fa-stack fa-lg">
			                    <i className="fas fa-circle fa-stack-2x"></i>
			                    <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
			                  </span>
			                </a>
			              </li>
			              <li className="list-inline-item">
			                <a href="#">
			                  <span className="fa-stack fa-lg">
			                    <i className="fas fa-circle fa-stack-2x"></i>
			                    <i className="fab fa-github fa-stack-1x fa-inverse"></i>
			                  </span>
			                </a>
			              </li>
			            </ul>
			            <p className="copyright text-muted">Copyright &copy; Matt Carapella. 2019.</p>
			          </div>
			        </Row>
			      </Container>
			    </footer>
			  </BasePage>
			</BaseLayout>

		);
	}
}

export default Blog;