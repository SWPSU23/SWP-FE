import PropTypes from 'prop-types';
import React, {useState} from 'react';
import styles from './PaymentMethods.module.css';
import {ButtonStand} from '../../button/ButtonStand/ButtonStand';
import Momo from '../../assets/Momo.png';
import Cash from '../../assets/cash.png';
import {FormQRCode} from '../../form/FormQRCode/FormQRCode';
import {useDispatch} from 'react-redux';
import {updateSelectedPaymentMethod} from '../../redux/billOrder/action';

export const PaymentMethods = () => {
	PaymentMethods.propTypes = {
		onPaymentMethodChange: PropTypes.func.isRequired,
	};
	const [activeButton, setActiveButton] = useState(null);
	const [showQRCode, setShowQRCode] = useState(false);

	const dispatch = useDispatch();

	const qrCodeData = 'https://www.mtc.com';

	const handleButtonClick = (content) => {
		setActiveButton(content);
		if (content === 'Momo') {
			setShowQRCode(true);
		}
		dispatch(updateSelectedPaymentMethod(content));
	};

	const handleCloseQRCode = () => {
		setShowQRCode(false);
		setActiveButton(null);
		// dispatch(updateSelectedPaymentMethod(null));
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
