import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import styles from './CashierWorksheet.module.css';
import {CashierWorkSheetTable} from '../../table/CashierWorkSheetTable/CashierWorkSheetTable';
import {FormWorksheetCashier} from '../../form/FormWorksheetCashier/FormWorksheetCashier';

export const CashierWorksheet = ({
	add,
	handleGetWorkSheet,
	worksheet,
	handleAddClick,
	handleToggleForm,
	isOpenForm,
}) => {
	CashierWorksheet.propTypes = {
		add: PropTypes.bool.isRequired,
		isOpenForm: PropTypes.bool.isRequired,
		handleGetWorkSheet: PropTypes.func.isRequired,
		handleAddClick: PropTypes.func.isRequired,
		handleToggleForm: PropTypes.func.isRequired,
		worksheet: PropTypes.array.isRequired,
	};

	// useEffect(() => {
	// 	handleGetWorkSheet('2023-07-10,2023-07-16');
	// }, []);
	return (
		<div className={styles.CashierWorksheet}>
			<CashierWorkSheetTable
				add={add}
				isOpenForm={isOpenForm}
				handleAddClick={handleAddClick}
				handleToggleForm={handleToggleForm}
				// andleGetWorkSheet={handleGetWorkSheet}
				worksheetRender={worksheet}
			/>
			{isOpenForm ? (
				<FormWorksheetCashier
					add={add}
					handleAddClick={handleAddClick}
					handleGetWorkSheet={handleGetWorkSheet}
					handleToggleForm={handleToggleForm}
				/>
			) : (
				<div></div>
			)}
		</div>
	);
};
