import propTypes from 'prop-types';
import {UserOutlined} from '@ant-design/icons';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './PayRollTable.module.css';
// import {DropDown} from '../../components/DropDown/DropDown';
import {data} from '../../shared/ListOfEmployee';
import {DropDownPayroll} from '../../components/DropDownPayroll/DropDownPayroll';
import {fetchPayrollAsync} from '../../redux/salary/action';

function PayRollTable({handleButtonForm}) {
	PayRollTable.propTypes = {
		handleButtonForm: propTypes.func.isRequired,
	};
	const [monthDropdown, setMonthDropdown] = useState();
	const dispatch = useDispatch();

	const payRollData = useSelector((state) => state.salary.payRoll);
	console.log(payRollData);
	const handleGetMonth = (month) => {
		setMonthDropdown(month);
	};

	useEffect(() => {
		handleGetMonth();
	}, []);

	useEffect(() => {
		if (monthDropdown) {
			dispatch(fetchPayrollAsync(monthDropdown));
		}
	}, [monthDropdown]);

	return (
		<div>
			<div className={styles.header}>
				<div className={styles.dropdown}>
					<DropDownPayroll handleGetMonth={handleGetMonth} />
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
						{payRollData !== null ? (
							payRollData.map((payroll, index) => (
								<tr key={index}>
									<td>{payroll.employee_id}</td>
									<td>{payroll.employee_name}</td>
									<td>{payroll.employee_role}</td>
									<td>{payroll.base_salary}</td>
									<td>{payroll.tax}</td>
									<td>{payroll.total_hours}</td>
									<td>{payroll.total_salary}</td>
									<td>
										<div
											className={styles.btnForm}
											onClick={() =>
												handleButtonForm({
													employeeId: payroll.employee_id,
													month: monthDropdown,
													totalSalary: payroll.total_salary,
												})
											}
										>
											<button className={styles.btn}>
												<UserOutlined />
											</button>
											{/* <button className="btn">
										<DeleteOutlined />
									</button> */}
										</div>
									</td>
								</tr>
							))
						) : (
							<div>Loading....</div>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default PayRollTable;
