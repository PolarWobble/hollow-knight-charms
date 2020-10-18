import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmGatheringSwarm = () => {
	return (
		<div class="Charms">
			<ModalImage
			  small={'https://vignette.wikia.nocookie.net/hollowknight/images/8/8a/Gathering_Swarm.png/revision/latest?cb=20180909165419'}
			  large={'https://vignette.wikia.nocookie.net/hollowknight/images/9/96/Mapshot_HK_Sly_01.png/revision/latest?cb=20190726130026'}
			  alt="Gathering Swarm"
			  className="grow"
			/>
            <p class="SmallFont" >Gathering Swarm</p>
		</div>
	);
}

export default CharmGatheringSwarm;
