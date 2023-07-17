import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import styles from './CashierWorkSheetTable.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {fetchWorksheetByIDAsync} from '../../redux/worksheet/action';

export const CashierWorkSheetTable = ({worksheetRender, handleAddClick}) => {
	CashierWorkSheetTable.propTypes = {
		worksheetRender: PropTypes.array.isRequired,
		handleAddClick: PropTypes.func.isRequired,
	};
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.worksheet.guards);
	const calenderDay = useSelector((state) => state.worksheet.calenderDay);

	const [worksheet, setWorksheet] = useState();

	useEffect(() => {
		setWorksheet(worksheetRender);
	}, [worksheetRender]);

	if (!calenderDay || !worksheet) {
		return;
	}

	console.log('worksheet' + worksheet);
	// Get Worksheet by ID
	const handleGetWorkSheetByID = (id) => {
		console.log(id);
		dispatch(fetchWorksheetByIDAsync(id)).then((reponse) => handleAddClick());
	};

	return (
		<div className={styles.tableContainer}>
			<table className={styles.worksheetTable}>
				<thead>
					<tr>
						<th></th> {/* Ô trống ở góc trên bên trái */}
						{calenderDay.map((day, index) => (
							<th
								key={index}
								style={{backgroundColor: day.isSpecialDay == 'yes' ? 'orange' : ''}}
							>
								<div>{day.day_of_week}</div>
								<div>{day.date}</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{worksheet.map((sheet, index) => (
						<tr key={index}>
							<th>Sheet {index + 1}</th>
							{Object.values(sheet)[0].map((item, idx) => (
								<td style={{height: 200}} key={idx}>
									{item.detail.map((item, idx) => (
										<p
											key={idx}
											onClick={() =>
												handleGetWorkSheetByID(item.worksheet_id)
											}
											className={styles.worksheetEmployee}
										>
											{item.employee_name}
										</p>
									))}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
