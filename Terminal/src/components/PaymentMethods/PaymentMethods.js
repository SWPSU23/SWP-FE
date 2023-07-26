import React, {useState} from 'react';
import styles from './PaymentMethods.module.css';
import {ButtonStand} from '../../button/ButtonStand/ButtonStand';
import Momo from '../../assets/Momo.png';
import Cash from '../../assets/cash.png';
import {FormQRCode} from '../../form/FormQRCode/FormQRCode';

export const PaymentMethods = () => {
	const [activeButton, setActiveButton] = useState(null);
	const [showQRCode, setShowQRCode] = useState(false);

	const qrCodeData = 'https://www.mtc.com';

	const handleButtonClick = (content) => {
		setActiveButton(content);
		if (content === 'Momo') {
			setShowQRCode(true);
		}
	};

	const handleCloseQRCode = () => {
		setShowQRCode(false);
		setActiveButton(null); // Remove active state when closing QRCode
	};

	return (
		<div className={styles.paymentMethods}>
			<h2>Payment methods</h2>
			<div className={styles.paymentMethodsButton}>
				<ButtonStand
					img={Momo}
					content="Momo"
					onClick={() => handleButtonClick('Momo')}
					active={activeButton === 'Momo'}
				/>
				<ButtonStand
					img={Cash}
					content="Cash"
					onClick={() => handleButtonClick('Cash')}
					active={activeButton === 'Cash'}
				/>
			</div>
			{showQRCode && <FormQRCode value={qrCodeData} handleClose={handleCloseQRCode} />}
		</div>
	);
};
