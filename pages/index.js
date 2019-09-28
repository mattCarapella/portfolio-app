import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import Typed from 'react-typed';

class Index extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isFlipping: false
		}
		this.roles = ['Ruby on Rails', 'React.js', 'Python', 'HTML/CSS', 'JavaScript']
	}

	componentDidMount() {
		this.animateCard();
	}

	componentWillLeave() {
		this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
	}

	animateCard() {
		this.cardAnimationInterval = setInterval(() => {
			this.setState({
				isFlipping: !this.state.isFlipping
			})
		}, 3000);
	}

	render() {
		const { isAuthenticated, user } = this.props.auth;
		const { isFlipping } = this.state;

		return (
			<BaseLayout className="cover" {...this.props.auth} headerType='index'>
			  <div className="main-section">
			    <div className="background-image">
			      <img src="/static/images/background-index.png" />
			    </div>
			    <Container>
			      <Row>
			        <Col md="6">
			          <div className="hero-section">
			            <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
			              <div className="front">
			                <div className="hero-section-content">
			                  <h2> Full Stack Web Developer </h2>
			                  <div className="hero-section-content-intro">
			                    Have a look at my portfolio and job history.
			                  </div>
			                </div>
			                <img className="image" src="static/images/section-1.png"/>
			                <div className="shadow-custom">
			                  <div className="shadow-inner"> </div>
			                </div>
			              </div>
			              <div className="back">
			                <div className="hero-section-content">
			                  <h2> Back Text Goes Here </h2>
			                  <div className="hero-section-content-intro">
			                    Pulvinar sapien et ligula ullamcorper. Vitae congue eu consequat ac felis donec. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. At risus viverra adipiscing at.
			                  </div>
			                </div>
			                <img className="image" src="static/images/section-2.png"/>
			                <div className="shadow-custom">
			                  <div className="shadow-inner"> </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </Col>
			        <Col md="6" className="hero-welcome-wrapper">
			          <div className="hero-welcome-text">
			            <h1>
			              Matthew Carapella.
			            </h1>  
				          <div className="moving-text-container">  
				            <Typed
										  loop
										  typeSpeed={70}
										  backSpeed={40}
										  strings={this.roles}
										  backDelay={1000}
										  loopCount={0}
										  showCursor={false}
										  className="self-typed"
										  cursorChar="..."
										/>
									</div>
									<h1>
			              Get informed, collaborate and discover projects I was working on through the years!
			            </h1>
			          </div>
			          <div className="hero-welcome-bio">
			            <h1>
			              Let's take a look on my work.
			            </h1>
			          </div>
			        </Col>
			      </Row>
			    </Container>
			  </div>
			</BaseLayout>
		)
	}
}

export default Index;