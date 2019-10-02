import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import SocialLinks from '../components/shared/SocialLinks';
import IndexAbout from '../components/IndexAbout';
import IndexProjects from '../components/IndexProjects';
import BasePage from '../components/BasePage';
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

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
						<div className='header__text-box'>
							<h1 className='heading-primary'>
								<span className='heading-primary--main'>Hi, I'm <span className='highlight'>Matthew Carapella</span></span>
								<span className='heading-primary--sub'>I am a full-stack developer, specializing in </span>
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
							</h1>
							 <LinkScroll
		            	className='scroll-about-btn'
	                activeClass="active"
	                to="about"
	                spy={true}
	                smooth={true}
	                offset={-70}
	                duration={500}
	              >
	                Learn More
	              </LinkScroll>
						</div>
					</section>

					<IndexAbout />
					<IndexProjects />


			</BaseLayout>
			

		)
	}
}

export default Index;