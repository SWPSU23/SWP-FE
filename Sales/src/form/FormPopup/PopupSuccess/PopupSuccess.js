import React from 'react';
import styles from './PopupSuccess.module.css';
import PropTypes from 'prop-types';

export const PopupSuccess = ({handleToggleForm}) => {
	PopupSuccess.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};
	return (
		<div className={styles.formSuccess}>
			<div className={styles.formContainer}>
				<div className={styles.formContainerCenter}>
					<div>
						<img src="../assets/image/success.jpg" />
					</div>
					<h2>Success</h2>
				</div>
				<div className={styles.title}>Thank for your message. It has been sent.</div>
				<div className={styles.btn} onClick={handleToggleForm}>
					<button>OK</button>
				</div>
			</div>
		</div>
	);
};
