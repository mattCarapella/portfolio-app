import React from 'react';
import Link from 'next/link';
import ActiveLink from '../ActiveLink';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import auth0 from '../../services/auth0';

const BsNavlink = (props) => {
	const { route, title } = props;
  const className = props.className || '';

  return (
    <ActiveLink activeClassName='active' route={route}>
      <a className={`nav-link port-navbar-link ${className}`}> {title} </a>
    </ActiveLink>
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

    this.state = {
      isOpen: false,
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  
  renderBlogMenu() {
    const { isSiteOwner } = this.props;

    if (isSiteOwner) {
      return (
        <Dropdown nav className='port-navbar-link port-dropdown-menu' isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
          <DropdownToggle className='port-dropdown-toggle' nav caret>
            Blog 
          </DropdownToggle>
           <DropdownMenu>
             <DropdownItem>
               <BsNavlink className='port-dropdown-item' 
                          route="/blogs" 
                          title="Blog Posts" />
             </DropdownItem>
             <DropdownItem>
               <BsNavlink className='port-dropdown-item' 
                          route="/blogs/new" 
                          title="New Blog Post" />
             </DropdownItem>
             <DropdownItem>
               <BsNavlink className='port-dropdown-item' 
                          route="/blogs/dashboard" 
                          title="Dashboard" />
             </DropdownItem>
           </DropdownMenu>
        </Dropdown>
      );
    }
    return (
      <NavItem className="port-navbar-item">
        <BsNavlink route="/blogs" title="Blog" />
      </NavItem>
    );
  }

  render() {
  	const { isAuthenticated, user, className } = this.props;
    const { isOpen } = this.state;

    const menuOpenClass = isOpen ? 'menu-open' : 'menu-close'; 

    return (
      <div>
        <Navbar className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`} color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Matthew Carapella</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
              	<BsNavlink route="/portfolios" title="Projects" />
              </NavItem>

              {this.renderBlogMenu()}
             
              <NavItem className="port-navbar-item">
              	<BsNavlink route="/resume" title="Resume" />
              </NavItem>
              <NavItem className="port-navbar-item">
              	<BsNavlink route="/about" title="About" />
              </NavItem>
              
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