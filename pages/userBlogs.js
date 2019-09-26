import React, { Component } from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout'; 
import withAuth from '../components/hoc/withAuth'; 
import { Container, Row, Col } from 'reactstrap';
import { Link } from '../routes';

class UserBlogs extends Component {
	render() {
		return (
			<BaseLayout {...this.props.auth} headerType={'landing'}>
			  <div className="masthead" style={{"backgroundImage": "url('/static/images/project_01.jpg')"}}>
			    <div className="overlay"></div>
          <Container>
			     <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Blogs Dashboard</h1>
			            <span className="subheading">Programming, Life, and More...</span>
			          </div>
			        </div>
			      </div>
			    </Container>
			  </div>
			  <BasePage className="blog-user-page">
          <Row>
            <Col md="6" className="mx-auto text-center">
			       	Published Blogs
			      </Col>
			      <Col md="6" className="mx-auto text-center">
              Drafts
            </Col>
			    </Row>		    
			  </BasePage>
			</BaseLayout> 
		);
	}
}

export default withAuth('siteOwner')(UserBlogs);