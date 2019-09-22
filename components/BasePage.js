import PropTypes from 'prop-types';
import { Container} from 'reactstrap';

const BasePage = ({ className, title, containerClass, children }) => {
	return (
		<div className={`base-page ${className}`}>
			<Container className={containerClass}>
				{ title && <div className='page-header'><h1 className='title'>{title}</h1></div>}
				{ children }
			</Container>
		</div>
	);
}

BasePage.defaultProps = {
	className: '',
	containerClass: ''
}

export default BasePage; 