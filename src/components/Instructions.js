import React from 'react';
import './Instructions.css';

const Instructions = () => {
	return (
		<div class="New-instructions-format">
			<div>
				<text class="f3 lh-copy">Map location</text><br/>
				<text class="f5 lh-copy">click image of charm</text>
			</div>
			<div><text >- info -</text></div>
			<div>
				<text class="f3 lh-copy">Wiki link</text><br/>
				<text class="f5 lh-copy">click name of charm</text>
			</div>
		</div>
	);
}

export default Instructions;