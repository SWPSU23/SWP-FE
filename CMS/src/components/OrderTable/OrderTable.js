import React from 'react';
import {data} from '../../shared/ListOfOrder';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import style from './OrderTable.module.css';

const OrderTable = () => {
	return (
		<div className={style.tableWrapper}>
			<table className={style.orderTable}>
				<thead>
					<tr>
						<th>Order ID</th>
						<th>Cashier Name</th>
						<th>Product Quantity</th>
						<th>Total</th>
						<th>Date</th>
						{/* <th>Action</th> */}
					</tr>
				</thead>
				<tbody>
					{data.map((order, index) => (
						<tr key={index}>
							<td>{order.id}</td>
							<td>{order.name}</td>
							<td>{order.quantity}</td>
							<td>{order.total}</td>
							<td>{order.date}</td>
							{/* <td>
								<div className="btnForm">
									<button className="btn">
										<EditOutlined />
									</button>
									<button className="btn">
										<DeleteOutlined />
									</button>
								</div>
							</td> */}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default OrderTable;