import React, {Component} from 'react';
import logo from './logo.svg';
import Charms from './components/Charms.js';
import Instructions from './components/Instructions.js';
import './App.css';

class App extends Component {
  	render() {
  		return (
	    	<div class="App">
	      			<div>
		      			<Instructions/>

		      			<br/><br/><br/><br/><br/><br/>

		      			<Charms/>

					</div>
	      		
	    	</div>
	  	);
	}
}
export default App;
