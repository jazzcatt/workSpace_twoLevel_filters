import React from 'react';

export default class Button extends React.Component {
	render() {
		return	<button id={this.props.name} className={this.props.class} onClick={this.props.click}> 
					{this.props.name}
				</button>
	}
}