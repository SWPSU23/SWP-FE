import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import style from './GuardWorksheet.module.css';
import {GuardWorkSheetTable} from '../../table/GuardWorkSheetTable/GuardWorkSheetTable';
import {FormWorksheetGuard} from '../../form/FormWorksheetGuard/FormWorksheetGuard';
import {useSelector} from 'react-redux';

export const GuardWorksheet = ({
	add,
	handleGetWorkSheet,
	worksheet,
	handleAddClick,
	isOpenForm,
	handleToggleForm,
}) => {
	GuardWorksheet.propTypes = {
		add: PropTypes.bool.isRequired,
		isOpenForm: PropTypes.bool.isRequired,
		handleGetWorkSheet: PropTypes.func.isRequired,
		handleAddClick: PropTypes.func.isRequired,
		handleToggleForm: PropTypes.func.isRequired,
		worksheet: PropTypes.array.isRequired,
	};
	// const calenderDay = useSelector((state) => state.worksheet.calenderDay);

	useEffect(() => {
		// GET WORKSHEET MATCH WITH THIS WEEK
		// const startDate = calenderDay[0];
		// const endDate = calenderDay[calenderDay.length - 1];
		// handleGetWorkSheet(`${startDate},${endDate}`);
		handleGetWorkSheet('2023-07-10,2023-07-16');
	}, []);
	return (
		<div className={style.GuardWorksheet}>
			<GuardWorkSheetTable
				add={add}
				isOpenForm={isOpenForm}
				handleToggleForm={handleToggleForm}
				handleAddClick={handleAddClick}
				// andleGetWorkSheet={handleGetWorkSheet}
				worksheetRender={worksheet}
			/>
			{isOpenForm ? (
				<FormWorksheetGuard
					add={add}
					handleAddClick={handleAddClick}
					handleToggleForm={handleToggleForm}
					handleGetWorkSheet={handleGetWorkSheet}
				/>
			) : (
				<div></div>
			)}
		</div>
	);
};
