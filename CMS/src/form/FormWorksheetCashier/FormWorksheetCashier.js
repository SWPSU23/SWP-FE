import PropTypes from 'prop-types';
import React from 'react';
import style from './FormWorksheetCashier.module.css';

import FormWorksheetAddCashier from '../FormWorksheet/FormWorksheetAddCashier';

export const FormWorksheetCashier = ({handleGetWorkSheet, handleAddClick}) => {
	FormWorksheetCashier.propTypes = {
		handleGetWorkSheet: PropTypes.func.isRequired,
		handleAddClick: PropTypes.func.isRequired,
	};
	return (
		<div className={style.FormWorksheetCashier}>
			<FormWorksheetAddCashier
				handleAddClick={handleAddClick}
				handleGetWorkSheet={handleGetWorkSheet}
			/>
		</div>
	);
};
