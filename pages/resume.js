import React, { Component } from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout';
import {Row, Col} from 'reactstrap';

class Resume extends Component {
	render() {
		return (
			<BaseLayout {...this.props.auth}>
				<BasePage className='resume-page'>	
					<Row>
						<Col md={{size: 8, offset: 2}}>
							<iframe style={{width: '100%', height: '800px'}} src='/static/resume.pdf'></iframe>

							<div className='resume-title'>
								<a download='resume.pdf' className='btn btn-success' href='/static/resume.pdf'>
									Download
								</a>
							</div>
							
						</Col>
					</Row>
				</BasePage>
			</BaseLayout>
		);
	}
}

export default Resume;