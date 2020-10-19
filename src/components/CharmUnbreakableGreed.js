import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmUnbreakableGreed = () => {
	return (
		<div class="Charms">
			<ModalImage
			  small={'https://vignette.wikia.nocookie.net/hollowknight/images/2/2a/Unbreakable_Greed.png/revision/latest?cb=20171028004801'}
			  large={'https://vignette.wikia.nocookie.net/hollowknight/images/a/a6/Mapshot_HK_Divine_01.png/revision/latest?cb=20190811095047'}
			  alt="Unbreakable Greed"
			  className="grow"
			/>
            <p class="SmallFont" >Unbreakable Greed</p>
		</div>
	);
}

export default CharmUnbreakableGreed;
