import React from 'react';
import styles from './FormWorksheet.module.css';

const FormWorksheet = () => {
	return (
		<div className={styles.formWorksheet}>
			<div className={styles.formContainer}>
				<h1>Title of the task</h1>
				<div className={styles.formContainerCenter}>
					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Name: </h2>
						<input placeholder="Name..." />
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>ID: </h2>
						<input placeholder="ID..." />
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Workday: </h2>
						<input placeholder="Workday..." />
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Sheet: </h2>
						<input placeholder="Sheet..." />
					</div>
				</div>
				<div>
					<button className={`${styles['btn']} ${styles.btnAdd}`}>Add</button>
				</div>
				<div className={styles.formContainerButton}>
					<button className={`${styles['btn']} ${styles.btnUpdate}`}>Update</button>

					<button className={`${styles['btn']} ${styles.btnDelete}`}>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default FormWorksheet;
