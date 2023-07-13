import PropTypes from 'prop-types';
import React, {useState} from 'react';
import style from './GuardWorksheet.module.css';
import {GuardWorkSheetTable} from '../../table/GuardWorkSheetTable/GuardWorkSheetTable';
import {FormWorksheetGuard} from '../../form/FormWorksheetGuard/FormWorksheetGuard';

export const GuardWorksheet = ({add}) => {
	GuardWorksheet.propTypes = {
		add: PropTypes.bool.isRequired,
	};
	return (
		<div className={style.GuardWorksheet}>
			<GuardWorkSheetTable />
			{add ? <FormWorksheetGuard /> : <div></div>}
		</div>
	);
};
