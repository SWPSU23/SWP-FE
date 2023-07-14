import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import style from './GuardWorksheet.module.css';
import {GuardWorkSheetTable} from '../../table/GuardWorkSheetTable/GuardWorkSheetTable';
import {FormWorksheetGuard} from '../../form/FormWorksheetGuard/FormWorksheetGuard';

export const GuardWorksheet = ({add, handleGetWorkSheet}) => {
	GuardWorksheet.propTypes = {
		add: PropTypes.bool.isRequired,
		handleGetWorkSheet: PropTypes.func.isRequired,
	};
	useEffect(() => {
		handleGetWorkSheet('2023-07-10,2023-07-16');
	}, []);
	return (
		<div className={style.GuardWorksheet}>
			<GuardWorkSheetTable />
			{add ? <FormWorksheetGuard /> : <div></div>}
		</div>
	);
};
