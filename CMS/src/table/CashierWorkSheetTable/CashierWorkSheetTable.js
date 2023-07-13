import React from 'react';
import styles from './CashierWorkSheetTable.module.css';
import {useSelector} from 'react-redux';

export const CashierWorkSheetTable = () => {
	const tasks = useSelector((state) => state.worksheet.cashier);
	const calenderDay = useSelector((state) => state.worksheet.calenderDay);

	console.log(calenderDay);
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const sheets = ['1', '2', '3'];

	if (!calenderDay) {
		return;
	}
	return (
		<div className={styles.tableContainer}>
			<table className={styles.worksheetTable}>
				<thead>
					<tr>
						<th></th> {/* Ô trống ở góc trên bên trái */}
						{calenderDay.map((day, index) => (
							<th key={index}>
								<div>{day.day_of_week}</div>
								<div>{day.date}</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{sheets.map((sheet, index) => (
						<tr key={index}>
							<th>Sheet {sheet}</th>
							{days.map((day, dayIndex) => (
								<td key={dayIndex} className={styles.cell}>
									{tasks[day]?.[sheet] &&
										Object.entries(tasks[day][sheet]).map(([id, name]) => (
											<div key={id} className={styles.cellContent}>
												<div className="cellContentWrapper">{name}</div>
											</div>
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
