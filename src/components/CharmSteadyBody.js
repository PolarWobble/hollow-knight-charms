import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmSteadyBody = () => {
	return (
		<div class="Charms">
			<ModalImage
			  small={'https://vignette.wikia.nocookie.net/hollowknight/images/f/f5/Steady_Body.png/revision/latest/scale-to-width-down/127?cb=20180909165654'}
			  large={'https://vignette.wikia.nocookie.net/hollowknight/images/d/de/Mapshot_HK_Salubra_01.png/revision/latest/scale-to-width-down/801?cb=20190830085536'}
			  alt="Steady Body"
			  className="grow"
			/>
            <p class="SmallFont" >Steady Body</p>
		</div>
	);
}

export default CharmSteadyBody;