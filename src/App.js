import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  	return (
    	<div>
      		<body className="App-header">
      			<div>
	      			<div class="ba b--light-silver br4 pv3 ph4">
	      				<div>
	      					<text class="f3 lh-copy">Map location</text><br/>
	      					<text class="f5 lh-copy">click image of charm</text>
	      				</div>
	      				<br/>
	      				<div>
	      					<text class="f3 lh-copy">Wiki link</text><br/>
	      					<text class="f5 lh-copy">click name of charm</text>
	      				</div>
	      			</div>

	      			<br/><br/><br/><br/><br/><br/>

	      			<div className="Top-row">
	      				<a href="https://hollowknight.fandom.com/wiki/Wayward_Compass" target="_blank">
	  						<img src="https://vignette.wikia.nocookie.net/hollowknight/images/7/7d/Wayward_Compass.png/revision/latest?cb=20180909165457" class="grow App-charms"/>
						</a>
						<a href="https://hollowknight.fandom.com/wiki/Wayward_Compass" class="center" target="_blank">
		  					<text class="grow f7">Wayward<br/>Compass</text>
						</a>
						<a href="https://hollowknight.fandom.com/wiki/Wayward_Compass" target="_blank">
	  						<img src="https://vignette.wikia.nocookie.net/hollowknight/images/8/8a/Gathering_Swarm.png/revision/latest?cb=20180909165419" class="grow App-charms"/>
						</a>
						<a href="https://hollowknight.fandom.com/wiki/Gathering_Swarm" class="center" target="_blank">
		  					<text class="grow f7">Gathering<br/>Swarm</text>
						</a>
					</div>
				</div>
      		</body>
      		
    	</div>
  	);
}

export default App;
