import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmSoulCatcher = () => {
	return (
		<div class="Charms grow">
			<ModalImage
			  small={'https://vignette.wikia.nocookie.net/hollowknight/images/c/ca/Soul_Catcher.png/revision/latest?cb=20180909165119'}
			  large={'https://vignette.wikia.nocookie.net/hollowknight/images/b/bc/Soul_Catcher_Location.PNG/revision/latest?cb=20170512005148'}
			  alt="Soul Catcher"
			/>
            <p class="SmallFont" >Soul Catcher</p>
		</div>
	);
}

export default CharmSoulCatcher;
