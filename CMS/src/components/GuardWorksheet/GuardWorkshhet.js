import React from 'react';
import './GuardWorkshhet.css';
import {GuardWorkSheetTable} from '../../table/GuardWorkSheetTable/GuardWorkSheetTable';
import {FormWorksheetGuard} from '../../form/FormWorksheetGuard/FormWorksheetGuard';

export const GuardWorksheet = () => {
	return (
		<div className="GuardWorkshhet">
			<GuardWorkSheetTable />
			<FormWorksheetGuard />
		</div>
	);
};
