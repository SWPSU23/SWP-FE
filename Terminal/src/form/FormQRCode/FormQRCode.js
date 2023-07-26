import QRCodeReact from 'qrcode.react';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './FormQRCode.module.css';
import X from '../../assets/X.png';

export const FormQRCode = ({value, handleClose}) => {
	FormQRCode.propTypes = {
		value: PropTypes.string.isRequired,
		handleClose: PropTypes.func.isRequired,
	};
	return (
		<div className={styles.formQRCode}>
			<div className={styles.formContainer}>
				<div className={styles.closeButton} onClick={handleClose}>
					<img src={X} />
				</div>

				<div className={styles.qrCode}>
					<div className={styles.qrTitle}>
						<h3>QR Code</h3>
					</div>
					<QRCodeReact style={{height: 200 + 'px', width: 200 + 'px'}} value={value} />
				</div>
			</div>
		</div>
	);
};
