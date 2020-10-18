import React from 'react';
import CharmWaywardCompass from './CharmWaywardCompass';
import CharmGatheringSwarm from './CharmGatheringSwarm';
import CharmStalwartShell from './CharmStalwartShell';
import CharmSoulCatcher from './CharmSoulCatcher';
import CharmShamanStone from './CharmShamanStone';
import CharmSoulEater from './CharmSoulEater';
import CharmDashmaster from './CharmDashmaster';
import CharmSprintmaster from './CharmSprintmaster';
import CharmGrubsong from './CharmGrubsong';
import CharmGrubberflysElegy from './CharmGrubberflysElegy';

const RowTop = () => {
	return (
		<div class="flex justify-start items-center">
			<CharmWaywardCompass />
			<CharmGatheringSwarm />
			<CharmStalwartShell/>
			<CharmSoulCatcher/>
			<CharmShamanStone/>
			<CharmSoulEater/>
			<CharmDashmaster/>
			<CharmSprintmaster/>
			<CharmGrubsong/>
			<CharmGrubberflysElegy/>
		</div>
	);
}

export default RowTop;
