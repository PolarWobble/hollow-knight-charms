import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmUnbreakableHeart = () => {
	return (
		<div class="Charms">
			<ModalImage
			  small={'https://vignette.wikia.nocookie.net/hollowknight/images/1/15/Unbreakable_Heart.png/revision/latest?cb=20171028004956'}
			  large={'https://vignette.wikia.nocookie.net/hollowknight/images/a/a6/Mapshot_HK_Divine_01.png/revision/latest?cb=20190811095047'}
			  alt="Unbreakable Heart"
			  className="grow"
			/>
            <p class="SmallFont" >Unbreakable Heart</p>
		</div>
	);
}

export default CharmUnbreakableHeart;
