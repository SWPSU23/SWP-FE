import PropTypes from 'prop-types';
import React from 'react';
import styles from './FormWorksheetGuard.module.css';
import FormWorksheetAddGuard from '../FormWorksheet/FormWorksheet';

export const FormWorksheetGuard = ({handleGetWorkSheet, handleAddClick}) => {
	FormWorksheetGuard.propTypes = {
		handleGetWorkSheet: PropTypes.func.isRequired,
		handleAddClick: PropTypes.func.isRequired,
	};
	return (
		<div className={styles.FormWorksheetGuard}>
			<FormWorksheetAddGuard
				handleAddClick={handleAddClick}
				handleGetWorkSheet={handleGetWorkSheet}
			/>
		</div>
	);
};
