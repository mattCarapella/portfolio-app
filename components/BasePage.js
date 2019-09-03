import React from 'react';
import { Container} from 'reactstrap';

const BasePage = ({ className, children }) => {
	return (
		<div className={`base-page ${className}`}>
			<Container>
				{ children }
			</Container>
		</div>
	);
}

BasePage.defaultProps = {
	className: ''
}

export default BasePage; 