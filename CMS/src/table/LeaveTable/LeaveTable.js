import React from 'react';
// import PropTypes from 'prop-types';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import style from './LeaveTable.module.css';
import {data} from '../../shared/ListOfLeave';

export const LeaveTable = () => {
	return (
		<div className={style.tableWrapper}>
			<table className={style.leaveTable}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Start Date</th>
						<th>End Date</th>
						<th>Reason</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((leave, index) => (
						<tr key={index}>
							<td>{leave.id}</td>
							<td>{leave.name}</td>
							<td>{leave.startDate}</td>
							<td>{leave.endDate}</td>
							<td>{leave.reason}</td>
							<td>
								<div className={style.btnArea}>
									<button className={style.btn}>
										<CheckOutlined />
									</button>
									<button className={style.btn}>
										<CloseOutlined />
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
