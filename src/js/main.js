import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Side_menu from './side_menu';

var structure = {
	US: ['Apple','Windows','Dell','IBM'],
	Japan: ['Casio','Toshiba','Sony'],
	Korea: ['Samsung']
}


class App extends React.Component {
	constructor(){
		super();
		this.state = {
			head_menu: [
				'US', 'Japan', 'Korea'
			],
			head_menu_state: {
				last_chosen: 'US',
				US: 'active'
			}, //head_menu
			side_menu: [],
			side_menu_state: {} 
		} //state
	}
	componentDidMount() {
		let elems = structure[this.state.head_menu_state.last_chosen];
		this.setState({
			side_menu: elems
		});
	}
	headClick(e) { 
		if(e.target.id == this.state.head_menu_state.last_chosen)
			return;  // chosen the same button

		let head_state = this.state.head_menu_state;
		head_state[e.target.id] = 'active';
		head_state[head_state.last_chosen] = 'not_active';
		head_state.last_chosen = e.target.id;

		this.setState({
			head_menu_state: head_state // head_menu
			}, ()=>{this.setState({side_menu: structure[this.state.head_menu_state.last_chosen]})}
		); //setState 
	}
	sideClick(e) {
		if(e.target.id == this.state.side_menu_state.last_chosen)
			return;

		let side_state = this.state.side_menu_state;
		side_state[e.target.id] = 'active',
		side_state[side_state.last_chosen] = '',
		side_state.last_chosen = e.target.id;

		this.setState({side_menu_state: side_state});
	}
	render() {
		return	<div>
			 		<Header controls={this.state.head_menu_state} 
			 				click={this.headClick.bind(this)} 
			 				elems={this.state.head_menu}/>

			 		<Side_menu controls={this.state.side_menu_state} 
			 					click={this.sideClick.bind(this)} 
			 					elems={this.state.side_menu} />
				</div>
	}
}

window.onload = function() {

ReactDOM.render(<App/>,document.getElementById('container'));

}