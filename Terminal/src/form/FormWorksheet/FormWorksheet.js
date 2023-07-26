import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import styles from './FormWorksheet.module.css';
import saleicon from '../../assets/saleimage.png';
import {DropDown} from '../../components/DropDown/DropDown';
import worksheetimg from '../../assets/worksheet.png';
import {
	addWorksheetAsync,
	fetchAllWorksheetByDate,
	fetchCalenderDayAsync,
} from '../../redux/worksheet/action';

export const FormWorksheet = () => {
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const sheets = ['1', '2', '3'];
	const calenderDay = useSelector((state) => state.worksheet.calenderDay);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [worksheet, setWorksheet] = useState();
	const [selectedDate, setSelectedDate] = useState('');
	const [worksheetData, setWorksheetData] = useState([]);
	const [employee_id, setEmployeeId] = useState('');
	const [sheet_id, setSheetId] = useState('');
	const [date, setDate] = useState('');
	useEffect(() => {
		const defaultWorkSheet = '2023-07-10,2023-07-16';
		handleGetWorkSheet(defaultWorkSheet);
	}, []);

	const handleGetWorkSheet = (date) => {
		setSelectedDate(date);
		const daySelect = date.split(',');
		const startDate = daySelect[0];
		const endDate = daySelect[1];
		// get ID account form Redux
		const employeeId = 7;
		dispatch(fetchCalenderDayAsync(startDate, endDate));
		dispatch(fetchAllWorksheetByDate(startDate, endDate, employeeId)).then((response) => {
			setWorksheet(response.data.data);
		});
	};

	// const handleChange = () => {
	// 	const formData = {
	// 		employee_id,
	// 		sheet_id,
	// 		date,
	// 	};
	// 	dispatch(addWorksheetAsync(formData))
	// 		.then((response) => {
	// 			// Handle the response if needed
	// 			console.log('Response:', response);

	// 			// Clear the form fields after submit
	// 			setEmployeeId('');
	// 			setSheetId('');
	// 			setDate('');
	// 		})
	// 		.catch((error) => {
	// 			console.log('Error:', error);
	// 		});
	// };

	if (!worksheet) return;

	return (
		<div className={styles.formWorksheet}>
			<div className={styles.formContainer}>
				<div className={styles.formTitle}>
					<div>
						<img src={worksheetimg} alt="Worksheet" />
					</div>
					<h1>Worksheet</h1>
				</div>
				<div className={styles.tableForm}>
					<div className={styles.tableContainer}>
						<div className={styles.calendar}>
							<div>
								{/* Render the DropDown component */}
								<DropDown handleGetWorkSheet={handleGetWorkSheet} />
							</div>
						</div>
						<table className={styles.worksheetTable}>
							<thead>
								<tr>
									<th></th> {/* Empty cell in the top-left corner */}
									{calenderDay.map((day, index) => (
										<th
											key={index}
											style={{
												backgroundColor:
													day.isSpecialDay == 'yes' ? 'orange' : '',
											}}
										>
											<div>{day.day_of_week}</div>
											<div>{day.date}</div>
										</th>
									))}
								</tr>
							</thead>

							<tbody>
								{worksheet.map((sheet, sheetIndex) => (
									<tr key={sheetIndex}>
										<th>Sheet {sheetIndex + 1}</th>
										{Object.values(sheet)[0].map((day, dayIndex) => (
											<td key={dayIndex} className={styles.cell}>
												{day.detail.map((item, idx) => (
													<p
														key={idx}
														className={styles.worksheetEmployee}
													>
														<img src={saleicon} alt="Sale Icon" />
													</p>
												))}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div className={styles.buttonCancelWrap}>
					<div
						className={styles.buttonCancel}
						onClick={() => {
							navigate('/');
						}}
					>
						<ButtonSmall
							style={{
								backgroundColor: '#d9d9d9',
								color: '#474C58',
							}}
							title="Cancel"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
