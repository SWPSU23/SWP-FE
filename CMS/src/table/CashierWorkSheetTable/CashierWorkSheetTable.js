import React from 'react';
import styles from './CashierWorkSheetTable.module.css';
import {useSelector} from 'react-redux';

export const CashierWorkSheetTable = () => {
	const tasks = useSelector((state) => state.worksheet.cashier);

	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const sheets = ['1', '2', '3'];

	return (
		<div className={styles.tableContainer}>
			<table className={styles.worksheetTable}>
				<thead>
					<tr>
						<th></th> {/* Ô trống ở góc trên bên trái */}
						{days.map((day, index) => (
							<th key={index}>{day}</th>
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
