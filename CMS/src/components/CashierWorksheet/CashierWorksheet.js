import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import styles from './CashierWorksheet.module.css';
import {CashierWorkSheetTable} from '../../table/CashierWorkSheetTable/CashierWorkSheetTable';
import {FormWorksheetCashier} from '../../form/FormWorksheetCashier/FormWorksheetCashier';

export const CashierWorksheet = ({add, handleGetWorkSheet}) => {
	CashierWorksheet.propTypes = {
		add: PropTypes.bool.isRequired,
		handleGetWorkSheet: PropTypes.func.isRequired,
	};
	useEffect(() => {
		handleGetWorkSheet('2023-07-10,2023-07-16');
	}, []);
	return (
		<div className={styles.CashierWorksheet}>
			<CashierWorkSheetTable />
			{add ? <FormWorksheetCashier /> : <div></div>}
		</div>
	);
};
