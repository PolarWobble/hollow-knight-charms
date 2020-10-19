import React from 'react';
import CharmUnbreakableHeart from './CharmUnbreakableHeart';
import CharmUnbreakableGreed from './CharmUnbreakableGreed';
import CharmUnbreakableStrength from './CharmUnbreakableStrength';
import CharmSpellTwister from './CharmSpellTwister';
import CharmSteadyBody from './CharmSteadyBody';

const RowMid = () => {
	return (
		<div class="flex justify-end items-center">
			<CharmUnbreakableHeart/>
			<CharmUnbreakableGreed/>
			<CharmUnbreakableStrength/>
			<CharmSpellTwister />
			<CharmSteadyBody />
		</div>
	);
}

export default RowMid;
