import React, { Component, Fragment } from 'react';
import Link from 'next/link';


class Header extends Component {
	render() {
		const title = this.props.title;

		return (
			<Fragment>
				<Link href='/'>	
						<a> Home </a>
				</Link>
				<Link href='/blog'>
						<a> Blog </a>
				</Link>
				<Link href='/portfolios'>
						<a> Portfolios </a>
				</Link>
				<Link href='/about'>
						<a> About </a>
				</Link>
				<Link href='/resume'>
						<a> Resume </a>
				</Link>
				<style jsx>
					{`
						a {
							font-size: 20px;
							font-weight: 100;
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