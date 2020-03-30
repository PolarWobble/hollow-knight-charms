import React, {Component} from 'react';
import Top_row from './components/Top_row.js';
import Mid_row from './components/Mid_row.js';
import Instructions from './components/Instructions.js';
import './App.css';

class App extends Component {
  	render() {
  		return (
	    	<div class="App">
	      			<div>
		      			<Instructions/>

		      			<br/><br/><br/><br/><br/><br/>
		      			
		      			<div>
		      				<Top_row/>
		      				<Mid_row/>
		      			</div>
					</div>
	      		
	    	</div>
	  	);
	}
}
export default App;
