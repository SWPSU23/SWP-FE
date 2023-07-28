import propTypes from 'prop-types';
import {UserOutlined} from '@ant-design/icons';
import React from 'react';
import styles from './PayRollTable.module.css';
import {data} from '../../shared/ListOfPayRoll';

function PayRollTable({handleButtonForm}) {
	PayRollTable.propTypes = {
		handleButtonForm: propTypes.func.isRequired,
	};
	return (
		<div className={styles.tableWrapper}>
			<table className={styles.payrollTable}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Role</th>
						<th>Base Salary</th>
						<th>Sheet 1</th>
						<th>Sheet 2</th>
						<th>Sheet 3</th>
						<th>Sheet 3H</th>
						<th>Sheet 3S</th>
						<th>Violate</th>
						<th>Total</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((payroll, index) => (
						<tr key={index}>
							<td>{payroll.id}</td>

							<td>{payroll.name}</td>
							<td>{payroll.role}</td>
							<td>{payroll.baseCalary}</td>
							<td>{payroll.sheet1}</td>
							<td>{payroll.sheet2}</td>
							<td>{payroll.sheet3}</td>
							<td>{payroll.sheet3H}</td>
							<td>{payroll.sheet3S}</td>
							<td>{payroll.violate}</td>
							<td>{payroll.total}</td>

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
	);
}

export default PayRollTable;
