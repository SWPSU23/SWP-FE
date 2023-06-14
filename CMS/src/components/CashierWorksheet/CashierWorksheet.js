import React from 'react';
import './CashierWorksheet.css';
import {CashierWorkSheetTable} from '../../table/CashierWorkSheetTable/CashierWorkSheetTable';
import {FormWorksheetCashier} from '../../form/FormWorksheetCashier/FormWorksheetCashier';

export const CashierWorksheet = () => {
	return (
		<div className="CashierWorksheet">
			<CashierWorkSheetTable />
			<FormWorksheetCashier />
		</div>
	);
};
