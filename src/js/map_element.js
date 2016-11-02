import React from 'react';

export default class Map_elem extends React.Component {
	render() {
		return	<div className='map_elem'>
					<label>Model: {this.props.model}</label>
					<label>Price: {this.props.price}</label>
					<img src={this.props.img} />
				</div>
	}
}  