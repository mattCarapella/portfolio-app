import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SocialLinks from '../components/shared/SocialLinks';
import BasePage from '../components/BasePage';
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

class IndexProjects extends Component {
	render() {
		return (
			<Fragment>	
				<section id='projects'>
					 <BasePage className="projects-page-idx">
	          	<h1 className='projects-heading'>PROJECTS</h1>
      		</BasePage>
      		<style>
	          {`@import url('https://use.fontawesome.com/releases/v5.5.0/css/all.css'`}
	        </style>
				</section>
			</Fragment>
		)
	}
}

export default IndexProjects;