import React, {useState} from 'react';
import styles from './PaymentMethods.module.css';
import {ButtonStand} from '../../button/ButtonStand/ButtonStand';
import Momo from '../../assets/Momo.png';
import Cash from '../../assets/cash.png';
import {FormQRCode} from '../../form/FormQRCode/FormQRCode';

export const PaymentMethods = () => {
	const [showQRCode, setShowQRCode] = useState(false);

	const qrCodeData = 'https://www.mtc.com';

	const handleMomoClick = () => {
		setShowQRCode(true);
	};

	const handleCloseQRCode = () => {
		setShowQRCode(false);
	};

	return (
		<div className={styles.paymentMethods}>
			<h2>Payment methods</h2>
			<div className={styles.paymentMethodsButton}>
				{/* Pass the handleClick function to ButtonStand */}
				<ButtonStand img={Momo} content="Momo" onClick={handleMomoClick} />
				<ButtonStand img={Cash} content="Cash" />
			</div>
			{showQRCode && <FormQRCode value={qrCodeData} handleClose={handleCloseQRCode} />}
		</div>
	);
};
