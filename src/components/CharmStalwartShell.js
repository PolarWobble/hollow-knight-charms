import React from 'react';
import ModalImage from 'react-modal-image';
import './Charms.css';

const CharmStalwartShell = () => {
	return (
		<div class="Charms grow">
			<ModalImage
			  small={'https://vignette.wikia.nocookie.net/hollowknight/images/f/f2/Stalwart_Shell.png/revision/latest?cb=20170330141533'}
			  large={'https://vignette.wikia.nocookie.net/hollowknight/images/9/96/Mapshot_HK_Sly_01.png/revision/latest?cb=20190726130026'}
			  alt="Stalwart Shell"
			/>
            <p class="SmallFont" >Stalwart Shell</p>
		</div>
	);
}

export default CharmStalwartShell;
