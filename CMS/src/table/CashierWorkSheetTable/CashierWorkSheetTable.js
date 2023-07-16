import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import styles from './CashierWorkSheetTable.module.css';
import {useDispatch, useSelector} from 'react-redux';

export const CashierWorkSheetTable = ({worksheetRender}) => {
	CashierWorkSheetTable.propTypes = {
		worksheetRender: PropTypes.array.isRequired,
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
										<p key={idx} className={styles.worksheetEmployee}>
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
