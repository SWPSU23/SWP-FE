import React from 'react';
import PropTypes from 'prop-types';
import {ListOfOrderProduct} from '../../shared/ListOfOrderProduct';
import {DeleteOutlined} from '@ant-design/icons';
import style from './OrderProductTable.module.css';

export const OrderProductTable = ({orderProducts}) => {
	OrderProductTable.propTypes = {
		orderProducts: PropTypes.array.isRequired,
	};
	console.log(orderProducts);
	return (
		<div className={style.tableWrapper}>
			<table className={style.orderProductTable}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Unit</th>
						<th>Unit Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{orderProducts ? (
						orderProducts.map((orderProduct, index) => (
							<tr key={index}>
								<td>{orderProduct.id}</td>
								<td>{orderProduct.name}</td>
								<td>{orderProduct.unit}</td>
								<td>{orderProduct.unit_price}</td>
								<td>{orderProduct.quantity}</td>
								<td>{orderProduct.total}</td>
							</tr>
						))
					) : (
						<div></div>
					)}
				</tbody>
			</table>
		</div>
	);
};
