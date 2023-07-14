import React from 'react';
import styles from './PopupError.module.css';
import PropTypes from 'prop-types';

export const PopupError = ({handleToggleForm}) => {
	PopupError.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};
	return (
		<div className={styles.formError}>
			<div className={styles.formContainer}>
				<div className={styles.formContainerCenter}>
					<div>
						<img src="../assets/image/error.jpg" />
					</div>
					<h2>Oops</h2>
				</div>
				<div className={styles.title}>Please check and try again.</div>
				<div className={styles.btn} onClick={handleToggleForm}>
					<button>OK</button>
				</div>
			</div>
		</div>
	);
};
