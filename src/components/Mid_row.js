import React from 'react';
import Charm_wayward_compass from './Charm_wayward_compass';
import Charm_gathering_swarm from './Charm_gathering_swarm';
import Charm_stalwart_shell from './Charm_stalwart_shell';
import Charm_soul_catcher from './Charm_soul_catcher';
import Charm_shaman_stone from './Charm_shaman_stone';
import Charm_soul_eater from './Charm_soul_eater';
import Charm_dashmaster from './Charm_dashmaster';
import Charm_sprintmaster from './Charm_sprintmaster';
import Charm_grubsong from './Charm_grubsong';
import Charm_grubberflys_elegy from './Charm_grubberflys_elegy';

const Mid_row = () => {
	return (
		<div class="flex justify-end items-center">
			<Charm_wayward_compass/>
			<Charm_gathering_swarm/>
			<Charm_stalwart_shell/>
			<Charm_soul_catcher/>
			<Charm_shaman_stone/>
			<Charm_soul_eater/>
			<Charm_dashmaster/>
			<Charm_sprintmaster/>
			<Charm_grubsong/>
			<Charm_grubberflys_elegy/>
		</div>
	);
}

export default Mid_row;