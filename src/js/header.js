import React from 'react';

export default class Header extends React.Component {
	constructor(){
		super();
		this.state={
			last_chosen: 'US',
			US: 'active',
			JP: 'not_active',
			KR: 'nor_active'
		}
	}
	onClick(e){
		this.props.click(e);
	}
	render() {
		return	<div className='header'>
					<button onClick={this.onClick.bind(this)} id='US' className={this.props.controls.US}>USA</button>
					<button onClick={this.onClick.bind(this)} id='JP' className={this.props.controls.JP}>Japan</button>
					<button onClick={this.onClick.bind(this)} id='KR' className={this.props.controls.KR}>South-Korea</button>
				</div>
	}
}