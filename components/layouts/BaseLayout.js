import React, { Fragment } from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
	const { className, isAuthenticated, user, isSiteOwner, children } = props;
	const headerType = props.headerType || "default";

	return (
		<Fragment>
			<Head>
				<title>Matthew Carapella</title>
				<script src="https://kit.fontawesome.com/8e255610ab.js"></script>
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
			</Head>
			<div className='layout-container'>		
				<Header className={`port-nav-${headerType}`} 
								isAuthenticated={isAuthenticated} 
								isSiteOwner={isSiteOwner}
								user={user} />
				<main className={`cover ${className}` }>
					<div className='wrapper'>
						{ children }
					</div>
				</main>			
			</div>
		</Fragment>
	)
}

export default BaseLayout;