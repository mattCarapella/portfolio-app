import React, { Fragment } from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
	const { className, isAuthenticated, user, isSiteOwner, children, cannonical } = props;
	const headerType = props.headerType || "default";
	const title = props.title || 'Matt Carapella';

	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta name='description' content='My name is Matt Carapella and I am a full-stack web developer specializing in Ruby on Rails, ReactJS, NodeJs, Python, and various other languages.'/>
				<meta name='keywords' content='matt carapella, carapella developer, carapella ruby, carapella react, carapella javascript' />
				<meta property='og:title' content='Matt Carapella - Full-Stack Developer' />
				<meta property='og:locale' content='en_US' />
				<meta property="og:url" content={`${process.env.BASE_URL}`}/>
				<meta property='og:type' content='website' />
				<meta property='og:description' content='My name is Matt Carapella and I am a full-stack web developer specializing in Ruby on Rails, ReactJS, NodeJs, Python, and various other languages.'/>
				
				{cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}
				<link rel='icon' type='image/ico' href='/static/favicon.ico'/>
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
				<script src="https://kit.fontawesome.com/8e255610ab.js"></script>
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