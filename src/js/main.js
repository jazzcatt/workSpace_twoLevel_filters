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

		this.setState({head_menu:{
			[e.target.id]:'active',
			[this.state.last_chosen]:'not_active',
			last_chosen: [e.target.id]
			}//head_menu
		}); 
	}
	render() {
		return	<div>
			 		<Header controls={this.state.head_menu} click={this.headClick.bind(this)}/>
				</div>
	}
}

window.onload = function() {

ReactDOM.render(<App/>,document.getElementById('container'));

}