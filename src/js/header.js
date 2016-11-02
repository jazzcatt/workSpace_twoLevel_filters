import React from 'react';
import Button from './button';

export default class Header extends React.Component {
	onClick(e){
		this.props.click(e);
	}
	render() {	
		let elems = this.props.elems.map((e, num) => { 
			return <Button name={e} key={num} click={this.onClick.bind(this)} 
			class={this.props.controls[e]}/>
		});

		return <div className='header'>{elems}</div>
	}
}