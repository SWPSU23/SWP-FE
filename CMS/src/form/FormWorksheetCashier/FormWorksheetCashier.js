import PropTypes from 'prop-types';
import React from 'react';
import style from './FormWorksheetCashier.module.css';

import FormWorksheetAddCashier from '../FormWorksheet/FormWorksheetAddCashier';

export const FormWorksheetCashier = ({
	handleGetWorkSheet,
	handleAddClick,
	handleToggleForm,
	add,
}) => {
	FormWorksheetCashier.propTypes = {
		handleGetWorkSheet: PropTypes.func.isRequired,
		handleAddClick: PropTypes.func.isRequired,
		handleToggleForm: PropTypes.func.isRequired,
		add: PropTypes.bool.isRequired,
	};
	return (
		<div className={style.FormWorksheetCashier}>
			<FormWorksheetAddCashier
				add={add}
				handleAddClick={handleAddClick}
				handleGetWorkSheet={handleGetWorkSheet}
				handleToggleForm={handleToggleForm}
			/>
		</div>
	);
};
