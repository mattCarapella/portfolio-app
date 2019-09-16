import React, { Component, Fragment } from 'react';
import { Link } from '../routes';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';
import { Row, Col, Card, CardHeader, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import { Router } from '../routes';

import { getPortfolios } from '../actions';

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

	renderPortfolios(portfolios) {
		const { isAuthenticated, isSiteOwner } = this.props.auth;

		return portfolios.map((portfolio, index) => {
			return (
				<Col md="4" key={index}>
				  <React.Fragment>
				    <span>
				      <Card className="portfolio-card">
				        <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
				        <CardBody>
				          <p className="portfolio-card-city">{portfolio.location} </p>
				          <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
				          <CardText className="portfolio-card-text">{portfolio.description}</CardText>
				          <div className="readMore"> 
				          	{ isAuthenticated && isSiteOwner &&
						        	<Fragment>
						        		<Button onClick={() => Router.pushRoute(`/portfolios/${portfolio._id}/edit`)} className='edit-port-btn' color='warning'> 
						        			Edit
						        		</Button>
						        		<Button className='edit-port-btn' color='danger'>
						        			Delete
						        		</Button>
						        	</Fragment>
						        }
				          </div>
				        </CardBody>
				      </Card>
				    </span>
				  </React.Fragment>
				</Col>
			)
		})
	}   

	render() {
		const { portfolios } = this.props;
		const { isAuthenticated, isSiteOwner } = this.props.auth;
		
		return (
			<BaseLayout { ...this.props.auth }>
				<BasePage className='portfolio-page' title='Projects'>	
					{ isAuthenticated && isSiteOwner &&		
						<Button onClick={ () => Router.pushRoute('/portfolioNew') }
										className='create-port-btn' 
										color='success'>
							New Portfolio
						</Button>
					}
					<Row>{ this.renderPortfolios(portfolios) }</Row>
				</BasePage>
			</BaseLayout>
		);
	}
}

export default Portfolios;