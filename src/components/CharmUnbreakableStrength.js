import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmUnbreakableStrength = () => {
	return (
		<div class="Charms">
			<ModalImage
			  small={'https://vignette.wikia.nocookie.net/hollowknight/images/a/ac/Unbreakable_Strength.png/revision/latest?cb=20171028004739'}
			  large={'https://vignette.wikia.nocookie.net/hollowknight/images/a/a6/Mapshot_HK_Divine_01.png/revision/latest?cb=20190811095047'}
			  alt="Unbreakable Strength"
			  className="grow"
			/>
            <p class="SmallFont" >Unbreakable Strength</p>
		</div>
	);
}

export default CharmUnbreakableStrength;
