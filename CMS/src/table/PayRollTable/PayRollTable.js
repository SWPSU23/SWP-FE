import propTypes from 'prop-types';
import {UserOutlined} from '@ant-design/icons';
import React from 'react';
import styles from './PayRollTable.module.css';
import {DropDown} from '../../components/DropDown/DropDown';
import {data} from '../../shared/ListOfEmployee';

function PayRollTable({handleButtonForm}) {
	PayRollTable.propTypes = {
		handleButtonForm: propTypes.func.isRequired,
	};
	return (
		<div>
			<div className={styles.header}>
				<div className={styles.dropdown}>
					<DropDown />
				</div>
			</div>
			<div className={styles.tableWrapper}>
				<table className={styles.payrollTable}>
					<thead>
						<tr>
							<th>Employee ID</th>
							<th>Name</th>
							<th>Role</th>
							<th>Base Salary</th>
							<th>Tax</th>
							<th>Total hours</th>
							<th>Total Salary</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{data.map((payroll, index) => (
							<tr key={index}>
								<td>{payroll.employeeId}</td>
								<td>{payroll.name}</td>
								<td>{payroll.role}</td>
								<td>{payroll.baseSalary}</td>
								<td>{payroll.tax}</td>
								<td>{payroll.totalHours}</td>
								<td>{payroll.totalSalary}</td>
								<td>
									<div className={styles.btnForm} onClick={handleButtonForm}>
										<button className="btn">
											<UserOutlined />
										</button>
										{/* <button className="btn">
										<DeleteOutlined />
									</button> */}
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default PayRollTable;
