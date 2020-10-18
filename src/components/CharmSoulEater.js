import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmSoulEater = () => {
	return (
		<div class="Charms grow">
			<ModalImage
			  small={'https://vignette.wikia.nocookie.net/hollowknight/images/6/6c/Soul_Eater.png/revision/latest?cb=20180909165007'}
			  large={'https://vignette.wikia.nocookie.net/hollowknight/images/f/ff/Soul_Eater_Location.png/revision/latest?cb=20190830090137'}
			  alt="Soul Eater"
			/>
            <p class="SmallFont" >Soul Eater</p>
		</div>
	);
}

export default CharmSoulEater;
