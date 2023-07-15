import PropTypes from 'prop-types';

import React from 'react';
import styles from './FormWorksheetGuard.module.css';
import FormWorksheetAddGuard from '../FormWorksheet/FormWorksheet';

export const FormWorksheetGuard = ({handleGetWorkSheet}) => {
	FormWorksheetGuard.propTypes = {
		handleGetWorkSheet: PropTypes.func.isRequired,
	};
	return (
		<div className={styles.FormWorksheetGuard}>
			<FormWorksheetAddGuard handleGetWorkSheet={handleGetWorkSheet} />
		</div>
	);
};
