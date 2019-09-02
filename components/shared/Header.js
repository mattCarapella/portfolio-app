import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import '../../styles/main.scss';

class Header extends Component {
	render() {
		// debugger;
		const title=this.props.title;

		return (
			<Fragment>
				<p>{ title }</p>
				{ this.props.children }
				<p className='customClass'>I am a styled p element</p>
				<p className='customClassFromFile'>I am a styled p element</p>

				<Link href='/'>	
						<a>Home</a>
				</Link>
				<Link href='/blog'>
						<a>Blog</a>
				</Link>
				<Link href='/portfolios'>
						<a>Portfolios</a>
				</Link>
				<Link href='/about'>
						<a>About</a>
				</Link>
				<Link href='/resume'>
						<a>Resume</a>
				</Link>
				<style jsx>
					{`
						a {
							font-size: 20px;
						};
						 .customClass {
							color: red;
						}
						`
					}
				</style>
			</Fragment>		
		);
	}
}

export default Header;