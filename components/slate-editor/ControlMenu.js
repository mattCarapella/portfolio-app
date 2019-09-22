import { Button } from 'reactstrap'; 

const ControlMenu = props => {
	return (
		<div className='control-menu'>
			<h1 className='title'>Create a New Blog Post</h1>
			<div className='status-box'>{ props.isLoading ? 'Saving...' : 'Saved' }</div>
			<Button onClick={props.save} color='success'>Save</Button>
		</div>
	)
}

export default ControlMenu;