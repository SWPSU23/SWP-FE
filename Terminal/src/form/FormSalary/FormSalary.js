import React, {useEffect, useState} from 'react';
import styles from './FormSalary.module.css';
import salaryimg from '../../assets/salary.png';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import {useNavigate} from 'react-router';
import {DropDownSalary} from '../../components/DropDownSalary/DropDownSalary';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSalary} from '../../redux/salary/action';

export const FormSalary = () => {
	const navigate = useNavigate();
	const [selectedMonth, setSelectedMonth] = useState('');

	const dispatch = useDispatch();
	const userInfo = useSelector((state) => state.authen.cashierInfor);
	const salaryData = useSelector((state) => state.salary.paySlip);
	console.log('salaryData: ' + JSON.stringify(salaryData));
	console.log('userInfo: FormSalary: ' + userInfo.id);
	const [paySlip, setPaySlip] = useState();

	useEffect(() => {
		setPaySlip(salaryData);
	}, []);

	useEffect(() => {
		const defaultWorkSheet = '2023-07';
		handleGetSalary(defaultWorkSheet);
	}, []);

	const handleGetSalary = (month) => {
		setSelectedMonth(month);
		const monthSelect = month.split(',');
		const monthYear = monthSelect[0];
		const employeeId = userInfo.id;
		dispatch(fetchSalary(employeeId, monthYear));
	};

	if (!salaryData) return;
	return (
		<div className={styles.formSalary}>
			<div className={styles.formContainer}>
				<div className={styles.formTitleSalary}>
					<div>
						<img src={salaryimg} />
					</div>
					<h1>Salary</h1>
				</div>
				<div>
					<DropDownSalary handleGetSalary={handleGetSalary} />
				</div>
				{salaryData.employee_id === '' ? (
					<h2>Data not available at this time.</h2>
				) : (
					<table className={styles.salaryTable}>
						<thead>
							<tr>
								<th>Employee ID</th>
								<th>Name</th>
								<th>Role</th>
								<th>Base Salary</th>
								<th>Tax</th>
								<th>Sheet</th>
								<th>Total hours</th>
								<th>Total Salary</th>
								<th>Date</th>
							</tr>
						</thead>
						<tbody>
							{/* {salaryData.map((payslip, index) => (
							<tr key={index}>
								<td>{payslip.employee_id}</td>
								<td>{payslip.employee_name}</td>
								<td>{payslip.employee_role}</td>
								<td>{payslip.base_salary}</td>
								<td>{payslip.tax}</td>
								<td>{payslip.total_coefficient}</td>
								<td>{payslip.total_hours}</td>
								<td>{payslip.total_salary}</td>
								<td>{payslip.month_year}</td>
							</tr>
						))} */}
							<tr>
								<td>{salaryData.employee_id}</td>
								<td>{salaryData.employee_name}</td>
								<td>{salaryData.employee_role}</td>
								<td>{salaryData.base_salary}</td>
								<td>{salaryData.tax}</td>
								<td>{salaryData.total_coefficient}</td>
								<td>{salaryData.total_hours}</td>
								<td>{salaryData.total_salary}</td>
								<td>{salaryData.month_year}</td>
							</tr>
						</tbody>
					</table>
				)}
				<div className={styles.buttonCancelWrap}>
					<div className={styles.buttonCancel} onClick={() => navigate('/')}>
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
