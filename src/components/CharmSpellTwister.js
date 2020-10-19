import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmSpellTwister = () => {
	return (
		<div class="Charms">
			<ModalImage
			  small={'https://vignette.wikia.nocookie.net/hollowknight/images/3/33/Spell_Twister.png/revision/latest/scale-to-width-down/254?cb=20180909165049'}
			  large={'https://vignette.wikia.nocookie.net/hollowknight/images/2/2d/Spell_Twister_Location.jpg/revision/latest/scale-to-width-down/569?cb=20170404121423'}
			  alt="Spell Twister"
			  className="grow"
			/>
            <p class="SmallFont" >Spell Twister</p>
		</div>
	);
}

export default CharmSpellTwister;
