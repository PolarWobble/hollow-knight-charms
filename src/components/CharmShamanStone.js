import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmShamanStone = () => {
	return (
		<div class="Charms">
			<ModalImage
			  small={'https://vignette.wikia.nocookie.net/hollowknight/images/5/5e/Shaman_Stone.png/revision/latest?cb=20180909165308'}
			  large={'https://vignette.wikia.nocookie.net/hollowknight/images/d/de/Mapshot_HK_Salubra_01.png/revision/latest?cb=20190830085536'}
			  alt="Shaman Stone"
			  className="grow"
			/>
            <p class="SmallFont" >Shaman Stone</p>
		</div>
	);
}

export default CharmShamanStone;
