import React, {Component} from 'react';
import RowTop from './components/RowTop.js';
import RowMid from './components/RowMid.js';
import Instructions from './components/Instructions.js';
import './App.css';

class App extends Component {
  	render() {
  		return (
	    	<div class="App">
	    			<div class="HeaderInfo">
	    				<Instructions />
	    			</div>
	      			
	      			<div>
		      			

		      			<br/><br/><br/><br/><br/><br/>

		      			<div>
		      				<RowTop/>
		      				<RowMid/>
		      			</div>
					</div>

	    	</div>
	  	);
	}
}
export default App;
