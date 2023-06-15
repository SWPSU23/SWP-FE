import React from 'react';
import styles from './CashierWorkSheetTable.module.css';

export const CashierWorkSheetTable = () => {
	const days = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'];
	const sheets = ['Sheet 1', 'Sheet 2', 'Sheet 3'];

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
							<th className="sheet-column">{sheet}</th>
							{days.map((day, dayIndex) => (
								<td key={dayIndex} className="sheet-column">
									Sheet {index + 1}, Ngày {dayIndex + 2}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
