import propTypes from 'prop-types';
import React from 'react';
import styles from './FormPaySlip.module.css';
import {data} from '../../shared/ListOfEmployee';

export const FormPaySlip = ({handleCloseForm}) => {
	FormPaySlip.propTypes = {
		handleCloseForm: propTypes.func.isRequired,
	};
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
							{data.map((payslip, index) => (
								<tr key={index}>
									<td>{payslip.employeeId}</td>
									<td>{payslip.name}</td>
									<td>{payslip.role}</td>
									<td>{payslip.baseSalary}</td>
									<td>{payslip.sheet}</td>
									<td>{payslip.totalHours}</td>
									<td>{payslip.date}</td>
									<td>{payslip.tax}</td>
									<td>{payslip.totalSalary}</td>
								</tr>
							))}
						</tbody>
					</table>
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
