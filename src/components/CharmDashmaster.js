import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmDashmaster = () => {
	return (
			<div class="Charms">
				<ModalImage
				  small={'https://vignette.wikia.nocookie.net/hollowknight/images/7/70/Dashmaster.png/revision/latest?cb=20180810194020'}
				  large={'https://vignette.wikia.nocookie.net/hollowknight/images/e/ef/Dashmaster_Location.jpg/revision/latest?cb=20170404120828'}
				  alt="Dashmaster"
				/>
                <p class="SmallFont" >Dashmaster</p>
			</div>
	);
}

export default CharmDashmaster;
