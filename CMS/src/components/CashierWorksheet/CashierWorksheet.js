import PropTypes from 'prop-types';
import React from 'react';
import styles from './CashierWorksheet.module.css';
import {CashierWorkSheetTable} from '../../table/CashierWorkSheetTable/CashierWorkSheetTable';
import {FormWorksheetCashier} from '../../form/FormWorksheetCashier/FormWorksheetCashier';

export const CashierWorksheet = ({add}) => {
	CashierWorksheet.propTypes = {
		add: PropTypes.bool.isRequired,
	};
	return (
		<div className={styles.CashierWorksheet}>
			<CashierWorkSheetTable />
			{add ? <FormWorksheetCashier /> : <div></div>}
		</div>
	);
};
