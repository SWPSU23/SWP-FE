import React from 'react';
import styles from './FormWorksheetGuard.module.css';
import FormWorksheetAddGuard from '../FormWorksheet/FormWorksheet';

export const FormWorksheetGuard = () => {
	return (
		<div className={styles.FormWorksheetGuard}>
			<FormWorksheetAddGuard />
		</div>
	);
};
