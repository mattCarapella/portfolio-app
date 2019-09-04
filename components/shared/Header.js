// import React, { Component, Fragment } from 'react';
// import Link from 'next/link';


// class Header extends Component {
// 	render() {
// 		const title = this.props.title;

// 		return (
// 			<Fragment>
				// <Link href='/'>	
				// 		<a> Home </a>
				// </Link>
// 				<Link href='/blog'>
// 						<a> Blog </a>
// 				</Link>
// 				<Link href='/portfolios'>
// 						<a> Portfolios </a>
// 				</Link>
// 				<Link href='/about'>
// 						<a> About </a>
// 				</Link>
// 				<Link href='/resume'>
// 						<a> Resume </a>
// 				</Link>
// 				<style jsx>
// 					{`
// 						a {
// 							font-size: 20px;
// 							font-weight: 100;
// 						};
// 						 .customClass {
// 							color: red;
// 						}
// 						`
// 					}
// 				</style>
// 			</Fragment>		
// 		);
// 	}
// }

// export default Header;




import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Link from 'next/link';
import auth0 from '../../services/auth0';

const BsNavlink = ({ route, title }) => {
	return (
		<Link href={route}> 
			<a className='nav-link port-navbar-link'> {title} </a>
		</Link>
	)
}

const Login = () => {
	return (
		<span onClick={auth0.login} className='nav-link port-navbar-link clickable'> Login </span>
	)
}

const Logout = () => {
	return (
		<span onClick={auth0.logout} className='nav-link port-navbar-link clickable'> Logout </span>
	)
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
  	const { isAuthenticated, user } = this.props;
    return (
      <div>
        <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">portfolio.io</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
              	<BsNavlink route="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
              	<BsNavlink route="/portfolios" title="Portfolios" />
              </NavItem>
              <NavItem className="port-navbar-item">
              	<BsNavlink route="/blog" title="Blog" />
              </NavItem>
              <NavItem className="port-navbar-item">
              	<BsNavlink route="/resume" title="Resume" />
              </NavItem>
              <NavItem className="port-navbar-item">
              	<BsNavlink route="/about" title="About" />
              </NavItem>
              {	isAuthenticated &&
		             	<NavItem className="port-navbar-item">
		             		<span className="nav-link port-navbar-link"> {user.name} </span>
		             	</NavItem>	
             	}
	            { !isAuthenticated &&
		             	<NavItem className="port-navbar-item">
		             		<Login/>
		             	</NavItem>
             	}
             	
             	{	isAuthenticated &&
	             	<NavItem className="port-navbar-item">
	             		<Logout/>
	             	</NavItem>	
             	}
             	
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}