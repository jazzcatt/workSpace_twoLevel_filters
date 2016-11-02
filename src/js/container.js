import React from 'react';
import Map_elem from './map_element';

export default class Container extends React.Component {
	render() {
		let elems = this.props.data.map((e,i)=>{ return <Map_elem model={e.model} price={e.price} img={e.img}/>});
		return	<div className='container'>
					{elems}
				</div>
	}
}