import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../shared/Header';

const BaseLayout = ({ className, isAuthenticated, user, children }) => {
	return (
		<div className='layout-container'>
			<Header isAuthenticated={isAuthenticated} user={user}/>
			<main className={`cover ${className}`}>
				<div className='wrapper'>
					{ children }
				</div>
			</main>			
		</div>
	)
}

export default BaseLayout;