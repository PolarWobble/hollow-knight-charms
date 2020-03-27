import React from 'react';
import './Instructions.css';

const Instructions = () => {
	return (
		<div class="Instructions-format ba b--light-silver br4 pv3 ph4 inline-flex mt4">
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
	);
}

export default Instructions;