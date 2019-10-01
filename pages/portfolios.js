import React, { Component, Fragment } from 'react';
import { Link } from '../routes';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';
import PortfolioCard from '../components/portfolios/PortfolioCard';
import { Row, Col, Container, Button } from 'reactstrap';
import { Router } from '../routes';

import { getPortfolios, deletePortfolio } from '../actions';

class Portfolios extends Component {
	
	static async getInitialProps() {
		let portfolios = [];

		try {
			portfolios = await getPortfolios();
		} catch(err) {
			console.error(err);
		}
		return { portfolios }
	}

	navigateToEdit(portfolioId, e) {
		e.stopPropagation();
		Router.pushRoute(`/portfolios/${portfolioId}/edit`)
	}

	displayDeleteWarning(portfolioId, e) {
		e.stopPropagation();
		const isConfirmed  = window.confirm('Are you sure you want to delete?');
		if (isConfirmed) {
			this.deletePortfolio(portfolioId);
		}
	}

	deletePortfolio(portfolioId) {
		deletePortfolio(portfolioId)
			.then(() => {
				Router.pushRoute('/portfolios'); 
			})
			.catch(err => console.error(err))
	}

	renderPortfolios(portfolios) {
		const { isAuthenticated, isSiteOwner } = this.props.auth;

		return portfolios.map((portfolio, index) => {
			return (
				<Col md="4" key={index}>
				  <PortfolioCard portfolio={portfolio}>
				  	{ isAuthenticated && isSiteOwner &&
		        	<Fragment>
		        		<Button onClick={(e) => this.navigateToEdit(portfolio._id, e)} className='edit-port-btn' color='warning'> 
		        			Edit
		        		</Button>
		        		<Button onClick={(e) => this.displayDeleteWarning(portfolio._id, e)} className='edit-port-btn' color='danger'>
		        			Delete
		        		</Button>
		        	</Fragment>
		        }
				  </PortfolioCard>
				</Col>
			)
		})
	}   

	render() {
		const { portfolios } = this.props;
		const { isAuthenticated, isSiteOwner } = this.props.auth;
		
		return (
			<BaseLayout headerType={'landing'} className="portfolio-listing-page" { ...this.props.auth } title='Matt Carapella | Projects'>
				<div className="masthead-port" style={{"backgroundImage": "url('/static/images/keyboard_0001.jpeg')"}}>
			    <div className="overlay-port"></div>
			    <Container>
			      <div className="row">
			        <div className="col-lg-8 col-md-10 mx-auto">
			          <div className='site-heading-port'>
			            <h1 className='site-heading'>Projects</h1>
			            <span className="subheading-port"></span>
			            { isAuthenticated && isSiteOwner &&		
										<Button onClick={ () => Router.pushRoute('/portfolios/new') }
														className='create-port-btn' 
														color='primary'>
											Add a Project
										</Button>
									}
			          </div>
			        </div>
			      </div>
			    </Container>
			  </div>
				<BasePage className='portfolio-page'>	
					<Row>{ this.renderPortfolios(portfolios) }</Row>
				</BasePage>
				<style>
          {`@import url('https://use.fontawesome.com/releases/v5.5.0/css/all.css'`}
        </style>
			</BaseLayout>
		);
	}
}

export default Portfolios;