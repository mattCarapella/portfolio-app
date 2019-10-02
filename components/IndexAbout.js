import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SocialLinks from '../components/shared/SocialLinks';
import BasePage from '../components/BasePage';
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

class IndexAbout extends Component {
	render() {
		return (
			<Fragment>	
				<section id='about'>
					 <BasePage className="about-page-idx">
	          <Row className="mt-5">
	            <Col md="6">
	              <div className="left-side">
	                <h1 className="title fadein">About Me</h1>
	                <h4 className="subtitle fadein"> </h4>
	                <p className="subsubTitle fadein"> </p>
	                <span className='contact'>Get in contact with me at <strong>matthew.m.carapella@gmail.com</strong></span>
	              </div>
		          </Col> 
	            <Col md="6">
	              <div className="fadein">
		              <div className='about-text'>  
		                <p className='about-text-1'>I'm a full-stack developer, currently located out of Buffalo, NY.  I have a B.S. in Computer Science from the Univeristy at Buffalo. I have a passion for creating things.</p>
		                <p className='about-text-2'><strong>With my experience I can help you</strong></p>
		                	<ul>
		                		<li>Create responsive websites that work on a wide range of devices</li>
												<li>Assist with production of clean and functional design</li>
												<li>Bridge communication gap between designers and developers</li>
												<li>Integrate your website into an easy to use content management system</li>
											</ul>
										
	              	</div>
	              	<div className='projects-scroll'>	 
									  <LinkScroll
				            	className='scroll-projects-btn'
			                activeClass="active"
			                to="projects"
			                spy={true}
			                smooth={true}
			                offset={-70}
			                duration={500}
			              >
			                Check out some of my work
			              </LinkScroll>
		            	</div>
	              </div>
	              <div className='about-social-links' style={{'marginTop': '60px'}}>	
	              	<SocialLinks />
	              </div>
	            </Col>
	          </Row>
      		</BasePage>
      		<style>
	          {`@import url('https://use.fontawesome.com/releases/v5.5.0/css/all.css'`}
	        </style>
				</section>
			</Fragment>
		)
	}
}

export default IndexAbout;