import PropTypes from 'prop-types';
import React from 'react';
import styles from './FormEmployee.module.css';

export const FormEmployee = ({handleToggleForm}) => {
	FormEmployee.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};

	return (
		<div className={styles.formEmployee}>
			<div className={styles.formContainer}>
				<h1>Employee details</h1>
				<div className={styles.formContainerCenter}>
					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Id: </h2>
						<input placeholder="id ..." />
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Name: </h2>
						<input placeholder="name ..." />
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Age: </h2>
						<input placeholder="age ..." />
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Email: </h2>
						<input placeholder="email ..." />
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Role: </h2>
						<input placeholder="role ..." />
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Salary: </h2>
						<input placeholder="salary ..." />
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
