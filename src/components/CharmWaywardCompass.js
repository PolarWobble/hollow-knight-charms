import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmWaywardCompass = () => {
	return (
		<div class="Charms">
			<ModalImage
			  small={'https://vignette.wikia.nocookie.net/hollowknight/images/7/7d/Wayward_Compass.png/revision/latest?cb=20180909165457'}
			  large={'https://vignette.wikia.nocookie.net/hollowknight/images/2/2c/Mapshot_HK_Iselda_01.png/revision/latest/scale-to-width-down/551?cb=20190918115202'}
			  alt="Wayward Compass"
			  className="grow"
			/>
            <p class="SmallFont" >Wayward Compass</p>
		</div>
	);
}

export default CharmWaywardCompass;
