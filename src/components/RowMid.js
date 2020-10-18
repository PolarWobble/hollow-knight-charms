import React from 'react';
import CharmUnbreakableHeart from './CharmUnbreakableHeart';
import CharmUnbreakableGreed from './CharmUnbreakableGreed';
import CharmUnbreakableStrength from './CharmUnbreakableStrength';

const RowMid = () => {
	return (
		<div class="flex justify-end items-center">
			<CharmUnbreakableHeart/>
			<CharmUnbreakableGreed/>
			<CharmUnbreakableStrength/>
		</div>
	);
}

export default RowMid;
