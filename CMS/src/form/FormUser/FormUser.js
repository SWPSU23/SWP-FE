import PropTypes from 'prop-types';
import React from 'react';
import styles from './FormUser.module.css';

export const FormUser = ({handleToggleForm}) => {
	FormUser.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};

	return (
		<div className={styles.formUser}>
			<div className={styles.formContainer}>
				<h1>User</h1>
				<div className={styles.formContainerCenter}>
					<div className={styles.formInput}>
						<input placeholder="id ..." />
					</div>

					<div className={styles.formInput}>
						<input placeholder="name ..." />
					</div>

					<div className={styles.formInput}>
						<input placeholder="phone number ..." />
					</div>
				</div>

				<div className={styles.formContainerButton}>
					<button
						onClick={() => {
							handleToggleForm();
						}}
						className={`${styles['btn']} ${styles.btnClose}`}
					>
						Close
					</button>

					<button className={`${styles['btn']} ${styles.btnSave}`}>Save</button>
				</div>
			</div>
		</div>
	);
};
