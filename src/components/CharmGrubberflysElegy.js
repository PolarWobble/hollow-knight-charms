import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmGrubberflysElegy = () => {
	return (
			<div class="Charms">
				<ModalImage
				  small={'https://vignette.wikia.nocookie.net/hollowknight/images/b/bd/Grubberfly%27s_Elegy.png/revision/latest?cb=20180909170214'}
				  large={'https://vignette.wikia.nocookie.net/hollowknight/images/4/4b/Mapshot_HK_Mask_Shard_02.png/revision/latest?cb=20200417112845'}
				  alt="Grubberfly's Elegy"
				  className="grow"
				/>
                <p class="SmallFont" >Grubberflys Elegy</p>
			</div>
	);
}

export default CharmGrubberflysElegy;
