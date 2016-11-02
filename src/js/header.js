import React from 'react';
import Button from './button';

export default class Header extends React.Component {
	onClick(e){
		this.props.click(e);
	}
	render() {
		let list = [];    // get from object name of props in array
		for(let key in this.props.elems) {
			if(key == 'last_chosen') continue;
			list.push(key);
		}
		
		let elems = list.map((e, num) => { 
			return <Button name={e} key={num} click={this.onClick.bind(this)} 
			class={this.props.controls[e]}/>
		});

		return <div className='header'>{elems}</div>
	}
}