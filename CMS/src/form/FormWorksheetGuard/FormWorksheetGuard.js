import PropTypes from 'prop-types';
import React from 'react';
import styles from './FormWorksheetGuard.module.css';
import FormWorksheetAddGuard from '../FormWorksheet/FormWorksheet';

export const FormWorksheetGuard = ({handleGetWorkSheet, handleAddClick, handleToggleForm, add}) => {
	FormWorksheetGuard.propTypes = {
		handleGetWorkSheet: PropTypes.func.isRequired,
		handleAddClick: PropTypes.func.isRequired,
		handleToggleForm: PropTypes.func.isRequired,
		add: PropTypes.bool.isRequired,
	};
	return (
		<div className={styles.FormWorksheetGuard}>
			<FormWorksheetAddGuard
				add={add}
				handleAddClick={handleAddClick}
				handleGetWorkSheet={handleGetWorkSheet}
				handleToggleForm={handleToggleForm}
			/>
		</div>
	);
};
