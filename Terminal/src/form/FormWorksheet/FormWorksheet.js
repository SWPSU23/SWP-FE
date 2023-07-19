import React from 'react';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import worksheet from '../../assets/worksheet.png';
import './FormWorksheet.css';
import saleicon from '../../assets/saleimage.png';
import {data} from '../../share/listOfCalendar';
import {useNavigate} from 'react-router';

export const FormWorksheet = () => {
	const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const sheets = ['1', '2', '3'];
	const navigate = useNavigate();
	return (
		<div className="formWorksheet">
			<div className="formContainer">
				<div className="formTitle">
					<div>
						<img src={worksheet} />
					</div>
					<h1>Worksheet</h1>
				</div>
				<div className="tableForm">
					<div className="tableContainer">
						<div className="calendar">
							<select>
								{data.map((item, index) => (
									<option key={index} value={index}>
										{item.startDate} to {item.endDate}
									</option>
								))}
							</select>
						</div>
						<table className="worksheetTable">
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
											<td key={dayIndex} className="cell">
												<img src={saleicon} />
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div className="buttonCancelWrap">
					<div
						className="buttonCancel"
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
