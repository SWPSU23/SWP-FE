import React, {useEffect, useState} from 'react';
import styles from './GuardWorkSheetTable.module.css';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../components/Loading/Loading';
import {featchAllWorksheetByDate} from '../../redux/worksheet/action';
import {combinedArray} from '../../helper';

export const GuardWorkSheetTable = () => {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.worksheet.guards);
	const calenderDay = useSelector((state) => state.worksheet.calenderDay);
	const change = useSelector((state) => state.worksheet.change);
	console.log(change);

	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const [worksheet, setWorksheet] = useState();

	useEffect(() => {
		if (calenderDay.length > 0) {
			setStartDate(calenderDay[0].date ? calenderDay[0].date : '');
			setEndDate(
				calenderDay[calenderDay.length - 1].date
					? calenderDay[calenderDay.length - 1].date
					: ''
			);
			dispatch(featchAllWorksheetByDate(startDate, endDate, 'guard')).then((response) => {
				setWorksheet(response.data.data);
			});
		}
	}, [calenderDay, change]);

	if (!calenderDay || !worksheet) {
		return;
	}

	console.log(worksheet);

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
										<p key={idx}>{item.employee_name}</p>
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
