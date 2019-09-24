import React, { Component, Fragment } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import ControlMenu from './ControlMenu';
import HoverMenu from './HoverMenu';
import { renderMark, renderNode } from './renderers';
import { initialValue } from './initialValue';

import Html from 'slate-html-serializer';
import { rules } from './rules';
const html = new Html({ rules });

function BoldMark(props) {
	return <strong>{ props.children }</strong>
}

class SlateEditor extends Component {

	state = {
		 value: Value.create(),
		 isLoaded: false
	}

	componentDidMount() {
		const valueFromProps = this.props.initialValue;
		const value = valueFromProps ? Value.fromJSON(html.deserialize(valueFromProps)) : Value.fromJSON(initialValue);
		this.updateMenu();
		this.setState({ isLoaded: true, value });
	}

	componentDidUpdate() {
		this.updateMenu();
	}

	onChange = ({ value }) => {
		this.setState({ value });
	}

	onKeyDown(event, change, next) {
		const { isLoading } = this.props;
		if (!isLoading && event.which === 83 && (event.ctrlKey || event.metaKey)) {
			event.preventDefault();
			this.save();
		}
		next();
	}

	updateMenu = () => {
    const menu = this.menu;
    if (!menu) return;
    const { value } = this.state;
    const { fragment, selection } = value;

    if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
      menu.removeAttribute('style');
      return;
    }

    const native = window.getSelection();
    const range = native.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    menu.style.opacity = 1;
    menu.style.top = `${rect.top + window.pageYOffset - menu.offsetHeight}px`;

    menu.style.left = `${rect.left +
      window.pageXOffset -
      menu.offsetWidth / 2 +
      rect.width / 2}px`;
  }


  getTitle() {
  	const { value } = this.state; 
  	const firstBlock = value.document.getBlocks().get(0);
  	const secondBlock = value.document.getBlocks().get(1);
  	const title = firstBlock && firstBlock.text ? firstBlock.text : 'No Title';
  	const subTitle = secondBlock && secondBlock.text ? secondBlock.text : 'No Subtitle';
  	return { title, subTitle };
  }

  save() {
  	const { value } = this.state;
  	const { isLoading, save } = this.props;
  	const headingValues = this.getTitle();
  	const text = html.serialize(value);
  	!isLoading && save(text, headingValues);
  }

	render() {
		const { isLoaded } = this.state;
		return (
			<Fragment>
				{ isLoaded &&
					<Editor { ...this.props }
									placeholder='Enter some text...'
									value={ this.state.value } 
									onChange={ this.onChange } 
									onKeyDown={(event, change, next) => this.onKeyDown(event, change, next)}
									renderMark={ renderMark }
									renderNode={ renderNode }
									renderEditor={ this.renderEditor } />		
				}
			</Fragment>
		) 
	}

	renderEditor = (props, editor, next) => { 
		const children = next();
		const { isLoading } = props;
		return (
			<Fragment>
				<ControlMenu isLoading={ isLoading } save={ () => this.save() }> </ControlMenu>
				{children}
				<HoverMenu innerRef={ menu => (this.menu = menu) } editor={ editor } />
			</Fragment>
		)
	}
	
}

export default SlateEditor;