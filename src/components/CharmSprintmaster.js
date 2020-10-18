import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmSprintmaster = () => {
	return (
			<div class="Charms grow">
				<ModalImage
				  small={'https://vignette.wikia.nocookie.net/hollowknight/images/e/e9/Sprintmaster.png/revision/latest?cb=20171028131625'}
				  large={'https://vignette.wikia.nocookie.net/hollowknight/images/9/96/Mapshot_HK_Sly_01.png/revision/latest?cb=20190726130026'}
				  alt="Sprintmaster"
				/>
                <p class="SmallFont" >SprintMaster</p>
			</div>
	);
}

export default CharmSprintmaster;
