import React, { Component, Fragment } from 'react';
import HoverMenu from './HoverMenu';
import { Editor } from 'slate-react';
import { renderMark, renderNode } from './renderers';
import { initialValue } from './initialValue';

// Define a React component renderer for our code blocks.
// function CodeNode(props) {
//   return (
//     <pre {...props.attributes}>
//       <code>{props.children}</code>
//     </pre>
//   )
// }

function BoldMark(props) {
	return <strong>{props.children}</strong>
}

class SlateEditor extends Component {

	state = {
		 value: initialValue,
		 isLoaded: false
	}

	componentDidMount() {
		this.updateMenu();
		this.setState({ isLoaded: true });
	}

	componentDidUpdate() {
		this.updateMenu();
	}

	onChange = ({ value }) => {
		this.setState({ value });
	}

	updateMenu = () => {
    const menu = this.menu
    if (!menu) return

    const { value } = this.state
    const { fragment, selection } = value

    if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
      menu.removeAttribute('style')
      return
    }

    const native = window.getSelection()
    const range = native.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    menu.style.opacity = 1
    menu.style.top = `${rect.top + window.pageYOffset - menu.offsetHeight}px`

    menu.style.left = `${rect.left +
      window.pageXOffset -
      menu.offsetWidth / 2 +
      rect.width / 2}px`
  }

	// onKeyDown = (event, editor, next) => {
	// 	if (!event.ctrlKey) return next();

	// 	switch(event.key) {
	// 		case 'b': {
	// 			event.preventDefault();
	// 			editor.toggleMark('bold');
	// 			break;
	// 		}
	// 		case '`': {
	// 			const isCode = editor.value.blocks.some(block => block.type == 'code');
	// 			event.preventDefault();
	// 			editor.setBlocks(isCode ? 'paragraph' : 'code');
	// 			break;
	// 		}
	// 		default: { 
	// 			return next();
	// 		}
	// 	}
	// }

	// renderNode = (props, editor, next) => {
	// 	switch (props.node.type) {
	// 		case 'code':
	// 			return <CodeNode {...props} />
	// 		case 'paragraph':
	// 			return <p {...props.attributes}>{props.children}</p>
	// 		default:
	// 			return next();
	// 	}
	// }

	// renderMark = (props, editor, next) => {
	// 	switch (props.mark.type) {
	// 		case 'bold': 
	// 			return <BoldMark {...props} />
	// 		default:
	// 			return next();
	// 	}
	// }

	render() {
		const { isLoaded } = this.state;

		return (
			<Fragment>
				{ isLoaded &&
					<Editor placeholder='Enter some text...'
									value={this.state.value} 
									onChange={this.onChange} 
									renderMark={renderMark}
									renderNode={renderNode}
									renderEditor={this.renderEditor}
					/>
									
				}
			</Fragment>
		) 
	}

	renderEditor = (props, editor, next) => {
		const children = next();
		return (
			<Fragment>
				{children}
				<HoverMenu innerRef={menu => (this.menu = menu)} editor={editor} />
			</Fragment>
		)
	}

	
}

export default SlateEditor;