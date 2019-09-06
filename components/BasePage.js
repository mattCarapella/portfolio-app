import React from 'react';
import PropTypes from 'prop-types';
import { Container} from 'reactstrap';

const BasePage = ({ className, title, children }) => {
	return (
		<div className={`base-page ${className}`}>
			<Container>
				{ title && <div className='page-header'><h1 className='title'>{title}</h1></div>}
				{ children }
			</Container>
		</div>
	);
}

BasePage.defaultProps = {
	className: ''
}

BasePage.propTypes = {
	className: PropTypes.string.isRequired
}

export default BasePage; 