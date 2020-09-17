import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmWaywardCompass = () => {
	return (
		<div class="Charms">
			<ModalImage
			  small={'https://vignette.wikia.nocookie.net/hollowknight/images/7/7d/Wayward_Compass.png/revision/latest?cb=20180909165457'}
			  large={'https://gamefaqs1.cbsistatic.com/faqs/39/76039-125.jpg'}
			  alt="Wayward Compass"
			/>
            <p class="SmallFont" >Wayward Compass</p>
		</div>
	);
}

export default CharmWaywardCompass;
