import React from 'react';
import style from './GuardWorksheet.module.css';
import {GuardWorkSheetTable} from '../../table/GuardWorkSheetTable/GuardWorkSheetTable';
import {FormWorksheetGuard} from '../../form/FormWorksheetGuard/FormWorksheetGuard';

export const GuardWorksheet = () => {
	return (
		<div className={style.GuardWorksheet}>
			<GuardWorkSheetTable />
			<FormWorksheetGuard />
		</div>
	);
};
