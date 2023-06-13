import React from 'react';
import PropTypes from 'prop-types';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import {ListOfEmployee} from '../../shared/ListOfEmployee';
import './EmployeeTable.css';

export const EmployeeTable = ({handleToggleForm}) => {
	EmployeeTable.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};
	return (
		<div className="tableWrapper">
			<table className="employeeTable">
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
					{ListOfEmployee.map((employee, index) => (
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
								<div className="btnArea">
									<button className="btn" onClick={handleToggleForm}>
										<EditOutlined />
									</button>
									<button className="btn">
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
