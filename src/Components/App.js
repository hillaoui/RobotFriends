import React,{Component} from 'react';
import CardList from "../Containers/CardList";
import SearchBox from '../Containers/SearchBox.js';
import Scroll from '../Containers/Scroll.js';
import "./App.css";

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield : ''
		}
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users') 
		.then(response => response.json())
		.then(users => this.setState({robots : users})
	    );

	}


	onSearchChange = (event) => {
		this.setState({searchfield : event.target.value});
	}
	render () {
		const {robots,searchfield} = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (!robots.length) {
			return <h1>Loading Robots</h1> }
		else {
			return (
				<div className = "tc">
				    <h1 className = "f1">RoboFriends</h1>
				    <SearchBox searchChange = {this.onSearchChange}/>	
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
	        );
	    }

    }
}

export default App;