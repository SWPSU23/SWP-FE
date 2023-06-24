import React from 'react';
import PropTypes from 'prop-types';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import style from './EmployeeTable.module.css';

export const EmployeeTable = ({handleToggleFormUpdate, employeeList}) => {
	EmployeeTable.propTypes = {
		handleToggleFormUpdate: PropTypes.func.isRequired,
		employeeList: PropTypes.array.isRequired,
	};

	return (
		<div className={style.tableWrapper}>
			<table className={style.employeeTable}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Role</th>
						<th>Name</th>
						<th>Age</th>
						<th>Email</th>
						<th>Password</th>
						<th>Phone number</th>
						<th>Base salary</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{employeeList.map((employee, index) => (
						<tr key={index}>
							<td>{employee.id}</td>
							<td>{employee.role}</td>
							<td>{employee.name}</td>
							<td>{employee.age}</td>
							<td>{employee.email_address}</td>
							<td>{employee.password}</td>
							<td>{employee.phone}</td>
							<td>{employee.base_salary}</td>
							<td>
								<div className={style.btnArea}>
									<button
										className={style.btn}
										onClick={() => handleToggleFormUpdate(employee.id)}
									>
										<EditOutlined />
									</button>
									<button className={style.btn}>
										<DeleteOutlined />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
