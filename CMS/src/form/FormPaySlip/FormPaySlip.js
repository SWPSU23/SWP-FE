import propTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import styles from './FormPaySlip.module.css';
import {data} from '../../shared/ListOfEmployee';
import {fetchPayslipDetailsAsync} from '../../redux/salary/action';
import {useDispatch} from 'react-redux';

export const FormPaySlip = ({handleCloseForm}) => {
	FormPaySlip.propTypes = {
		handleCloseForm: propTypes.func.isRequired,
	};
	const dispatch = useDispatch();
	// CHANGE DATA
	const employeeId = 1;
	const total = 40000000;
	const monthOfYear = '2023-07';

	const [listDetails, setListDetails] = useState();

	useEffect(() => {
		dispatch(fetchPayslipDetailsAsync(employeeId, monthOfYear)).then((response) =>
			setListDetails(response.data.data)
		);
	}, []);

	console.log(listDetails);
	if (!listDetails) return;

	return (
		<div className={styles.formPayslip}>
			<div className={styles.formContainer}>
				<div className={styles.formTitle}>
					<h1>Employee Payslip</h1>
				</div>
				<div className={styles.tableWrapper}>
					<table className={styles.payslipTable}>
						<thead>
							<tr>
								<th>Employee ID</th>
								<th>Name</th>
								<th>Role</th>
								<th>Base Salary</th>
								<th>Sheet</th>
								<th>Total hours</th>
								<th>Date</th>
								<th>Tax</th>
								<th>Total Salary</th>
							</tr>
						</thead>
						<tbody>
							{listDetails.map((payslip, index) => (
								<tr key={index}>
									<td>{payslip.employee_id}</td>
									<td>{payslip.employee_name}</td>
									<td>{payslip.employee_role}</td>
									<td>{payslip.base_salary}</td>
									<td>{payslip.coefficient}</td>
									<td>{payslip.total_hours}</td>
									<td>{payslip.date}</td>
									<td>{payslip.tax}</td>
									<td>{payslip.total_salary_of_sheet}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className={styles.formContainerButton}>
					<h2 style={{marginRight: '10%'}}>Total Salary: {total}</h2>
				</div>
				<div className={styles.formContainerButton}>
					<button
						onClick={handleCloseForm}
						className={`${styles['btn']} ${styles.btnClose}`}
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};
