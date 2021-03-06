import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import Side_menu from './side_menu';
import Container from './container';
import data from './data';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			structure: this.getStructure(),
			data: this.getData(),
			data_map: [],
			head_menu: [],
			head_menu_state: {}, 
			side_menu: [],
			side_menu_state: {},
			side_menu_fold: false
		} //state
	}

	componentDidMount() {
		// elements initializations head menu
		let head_elems = this.getHeadElems(this.state.structure);
		this.setState({
			head_menu: head_elems,
			head_menu_state: {last_chosen: head_elems[0], [head_elems[0]]: 'active'}
		},()=>{    //initialization side_menu
			let elems = this.state.structure[this.state.head_menu_state.last_chosen];
			this.setState({side_menu: elems})});
		}

	getStructure() {                  // in real: fetch from database or selecting necessary fields from JSON     
		return data.structure;
	}

	getData() { 
		return data;
	}

	fetchData(company) {
		this.setState({data_map: this.state.data[company]});  
	}

	getHeadElems(struct) {
		let head_elems = [];
		for(let key in struct) {
			head_elems.push(key);
		}
		return head_elems;
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
			}, ()=>{this.setState({side_menu: this.state.structure[this.state.head_menu_state.last_chosen]})}
		); //setState 
	}

	sideClick(e) {
		if(e.target.id == this.state.side_menu_state.last_chosen)
			return;

		let side_state = this.state.side_menu_state;
		side_state[e.target.id] = 'active',
		side_state[side_state.last_chosen] = '',
		side_state.last_chosen = e.target.id;

		this.setState({side_menu_state: side_state}, this.fetchData(e.target.id));
	}

	sideMenuTrigger() {
		this.setState({
			side_menu_fold: !this.state.side_menu_fold
		});
	}

	render() {
		return	<div>
			 		<Header controls={this.state.head_menu_state} 
			 				click={this.headClick.bind(this)} 
			 				elems={this.state.head_menu}/>

			 		<Side_menu controls={this.state.side_menu_state} 
			 					click={this.sideClick.bind(this)} 
			 					elems={this.state.side_menu} 
			 					fold={this.state.side_menu_fold}
			 					trigger={this.sideMenuTrigger.bind(this)}/>
			 		<Container data={this.state.data_map} />
				</div>
	}
}

window.onload = function() {

ReactDOM.render(<App/>,document.getElementById('container'));

}