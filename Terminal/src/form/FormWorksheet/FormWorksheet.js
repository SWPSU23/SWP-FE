import React from 'react';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import worksheet from '../../assets/worksheet.png';
import styles from './FormWorksheet.module.css'; // Import the CSS module with the new name
import saleicon from '../../assets/saleimage.png';
import {data} from '../../share/listOfCalendar';
import {useNavigate} from 'react-router';

export const FormWorksheet = () => {
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const sheets = ['1', '2', '3'];
	const navigate = useNavigate();

	return (
		<div className={styles.formWorksheet}>
			<div className={styles.formContainer}>
				<div className={styles.formTitle}>
					<div>
						<img src={worksheet} alt="Worksheet" />
					</div>
					<h1>Worksheet</h1>
				</div>
				<div className={styles.tableForm}>
					<div className={styles.tableContainer}>
						<div className={styles.calendar}>
							<select>
								{data.map((item, index) => (
									<option key={index} value={index}>
										{item.startDate} to {item.endDate}
									</option>
								))}
							</select>
						</div>
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
												<img src={saleicon} alt="Sale Icon" />
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
