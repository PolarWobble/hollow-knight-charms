import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmGrubsong = () => {
	return (
			<div class="Charms">
				<ModalImage
				  small={'https://vignette.wikia.nocookie.net/hollowknight/images/7/78/Grubsong.png/revision/latest?cb=20180909170155'}
				  large={'https://vignette.wikia.nocookie.net/hollowknight/images/4/4b/Mapshot_HK_Mask_Shard_02.png/revision/latest?cb=20200417112845'}
				  alt="Grubsong"
				/>
                <p class="SmallFont" >Grubsong</p>
			</div>
	);
}

export default CharmGrubsong;
