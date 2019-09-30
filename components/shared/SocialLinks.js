import React, { Component } from 'react';
 import { Container, Row, Col } from 'reactstrap';

class SocialLinks extends Component {
	render() {
		return (
			<Container>
        <Row>
          <div className="col-lg-8 col-md-10 mx-auto">
	          <div className='social-icons'>  
	            <ul className="list-inline text-center">
	              <li className="list-inline-item">
	                <a target='_blank' href="http://www.linkedin.com/in/mattCarapella">
	                  <span className="fa-stack fa-lg">
	                    <i className="fas fa-circle fa-stack-2x"></i>   
	                    <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
	                  </span>
	                </a>
	              </li>
	              <li className="list-inline-item">
	                <a target='_blank' href="http://www.github.com/mattCarapella">
	                  <span className="fa-stack fa-lg">
	                    <i className="fas fa-circle fa-stack-2x"></i>
	                    <i className="fab fa-github fa-stack-1x fa-inverse"></i>
	                  </span>
	                </a>
	              </li>
	              <li className="list-inline-item">
	                <a href="#">
	                  <span className="fa-stack fa-lg">
	                    <i className="fas fa-circle fa-stack-2x"></i>
	                    <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
	                  </span>
	                </a>
	              </li>
	            </ul>
	          </div>
            <p className="copyright text-muted">Copyright &copy; Matt Carapella. 2019.</p>
          </div>
        </Row>
      </Container>
		)
	}
}

export default SocialLinks;