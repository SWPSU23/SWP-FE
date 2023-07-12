import React from 'react';
import PropTypes from 'prop-types';
import {data} from '../../shared/ListOfOrder';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import style from './OrderTable.module.css';
import {formatDate} from '../../helper';

const OrderTable = ({handleToggleFormUpdate, orderList}) => {
	OrderTable.propTypes = {
		handleToggleFormUpdate: PropTypes.func.isRequired,
		orderList: PropTypes.array.isRequired,
	};

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
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{orderList.map((order, index) => (
						<tr key={index}>
							<td>{order.id}</td>
							<td>{order.cashier_name}</td>
							<td>{order.product_quantity}</td>
							<td className={style.totalPrice}>{order.total_price}</td>
							<td>{formatDate(order.create_at)}</td>
							<td>
								<div className={style.btnForm}>
									<button
										className={style.btn}
										onClick={() => handleToggleFormUpdate(order.id)}
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
export default OrderTable;
