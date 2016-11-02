import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			head_menu: {
				last_chosen: 'US',
				US: 'active',
				JP: 'not_active',
				KR: 'nor_active'
			} //head_menu
		} //state
	}

	headClick(e) { 
		if(e.target.id == this.state.head_menu.last_chosen)
			return;  // chosen the same button

		let head_state = this.state.head_menu;
		head_state[e.target.id] = 'active';
		head_state[head_state.last_chosen] = 'not_active';
		head_state.last_chosen = e.target.id;

		this.setState({
			head_menu: head_state // head_menu
		}); 
	}
	render() {
		return	<div>
			 		<Header controls={this.state.head_menu} click={this.headClick.bind(this)} elems={this.state.head_menu}/>
				</div>
	}
}

window.onload = function() {

ReactDOM.render(<App/>,document.getElementById('container'));

}