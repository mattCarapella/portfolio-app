import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import About from './about';
import SocialLinks from '../components/shared/SocialLinks';

class Index extends Component {
	constructor (props) {
		super(props);
		this.state = {
			isFlipping: false
		}
		this.roles = ['Ruby on Rails', 'React.js', 'Python', 'HTML/CSS', 'JavaScript', 'Node.js', 'SQL / PostgreSQL', 'MongoDB']
	}

	componentDidMount() {
		this.animateCard();
	}

	componentWillUnmount() {
		this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
	}

	animateCard() {
		this.cardAnimationInterval = setInterval(() => {
			this.setState({
				isFlipping: !this.state.isFlipping
			})
		}, 50000);
	}

	render() {
		const { isAuthenticated, user } = this.props.auth;
		const { isFlipping } = this.state;

		return (
			
			<BaseLayout className='index-page' {...this.props.auth} 
										headerType='index'
										title='Matthew Carapella'>
				<section id='index'>
				  <div className="main-section">
				    <div className="background-image">
				      <Particles 
				      	params={{
				      		particles: {
	            			number: {
								      value: 80,
								     density: {
								        enable: true,
								        value_area: 800
								      }
								    },
								    color: {
								      value: '#ffffff'
								    },
								    shape: {
								      type: 'circle',
								      stroke: {
								        width: 0,
								        color: '#000000'
								      },
								      polygon: {
								        nb_sides: 3
								      },
								      
								    },
								    opacity: {
								      value: 0.2683101981549727,
								      random: true,
								      anim: {
								        enable: false,
								        speed: 1,
								        opacity_min: 0.1,
								        sync: false
								      }
								    },
								    size: {
								      value: 11.83721462448409,
								      random: true,
								      anim: {
								        enable: false,
								        speed: 40,
								        size_min: 0.1,
								        sync: false
								      }
								    },
								    line_linked: {
								      enable: false,
								      distance: 785.6719098241061,
								      color: "#ffffff",
								      opacity: 0.4,
								      width: 1.4430708547789706
								    },
								    move: {
								      enable: true,
								      speed: 1.5782952832645452,
								      direction: "none",
								      random: true,
								      straight: false,
								      out_mode: "out",
								      bounce: false,
								      attract: {
								        enable: false,
								        rotateX: 600,
								        rotateY: 1200
								      }
								    }
								  },
								  interactivity: {
								    detect_on: "canvas",
								    events: {
								      onhover: {
								        enable: false,
								        mode: "grab"
								      },
								      onclick: {
								        enable: true,
								        mode: "repulse"
								      },
								      resize: true
								    },
								    modes: {
								      grab: {
								       distance: 400,
								        line_linked: {
								          opacity: 1
								        }
								      },
								      bubble: {
								        distance: 400,
								        size: 40,
								        duration: 2,
								        opacity: 8,
								        speed: 3
								      },
								      repulse: {
								        distance: 200,
								        duration: 0.4
								      },
								      push: {
								        particles_nb: 4
								      },
								      remove: {
								        particles_nb: 2
								      }
								    }
								  },
								  retina_detect: true
	            		}
				      	}
				      />
				    </div>
				    <Container>
				      <Row>
				        <Col md="6">
				         
				        </Col>
				        <Col md="6" className="hero-welcome-wrapper">
				          <div className="hero-welcome-text">
				            <h1>
				              Matthew Carapella
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
				              I am a full-stack developer, currently working out of Buffalo, NY.
				            </h1>
				          </div>
				          <div className="hero-welcome-bio">
				            <h1>
				              Learn More
				            </h1>
				          </div>
				        </Col>
				      </Row>
				    </Container>
				  </div>
				</section>
			</BaseLayout>
			

		)
	}
}

export default Index;