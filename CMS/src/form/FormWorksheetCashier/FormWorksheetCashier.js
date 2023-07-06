import React from 'react';
import style from './FormWorksheetCashier.module.css';

import FormWorksheetAddCashier from '../FormWorksheet/FormWorksheetAddCashier';

export const FormWorksheetCashier = () => {
	return (
		<div className={style.FormWorksheetCashier}>
			<FormWorksheetAddCashier />
		</div>
	);
};
