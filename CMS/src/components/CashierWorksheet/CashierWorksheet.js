import React from 'react';
import styles from './CashierWorksheet.module.css';
import {CashierWorkSheetTable} from '../../table/CashierWorkSheetTable/CashierWorkSheetTable';
import {FormWorksheetCashier} from '../../form/FormWorksheetCashier/FormWorksheetCashier';

export const CashierWorksheet = () => {
	return (
		<div className={styles.CashierWorksheet}>
			<CashierWorkSheetTable />
			<FormWorksheetCashier />
		</div>
	);
};
