import React from 'react';
import Button from './button';

export default class Side_menu extends React.Component {
	onClick(e){
		this.props.click(e);
	}
	render() {
		let elems = this.props.elems.map((e, num) => { 
			return <Button name={e} key={num} click={this.onClick.bind(this)} 
			class={this.props.controls[e]}
			/>
		});
		return <div>
					<div className='menu_trigger'>CLOSE</div>
					<div className='side_menu'>{elems}</div>
				</div>
	}
}