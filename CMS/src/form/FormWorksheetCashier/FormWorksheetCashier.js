import PropTypes from 'prop-types';
import React from 'react';
import style from './FormWorksheetCashier.module.css';

import FormWorksheetAddCashier from '../FormWorksheet/FormWorksheetAddCashier';

export const FormWorksheetCashier = ({handleGetWorkSheet}) => {
	FormWorksheetCashier.propTypes = {
		handleGetWorkSheet: PropTypes.func.isRequired,
	};
	return (
		<div className={style.FormWorksheetCashier}>
			<FormWorksheetAddCashier handleGetWorkSheet={handleGetWorkSheet} />
		</div>
	);
};
