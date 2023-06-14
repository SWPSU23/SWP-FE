import React from 'react';
import {ListOfOrderProduct} from '../../shared/ListOfOrderProduct';
import {DeleteOutlined} from '@ant-design/icons';
import style from './OrderProductTable.module.css';

export const OrderProductTable = () => {
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
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{ListOfOrderProduct.map((orderProduct, index) => (
						<tr key={index}>
							<td>{orderProduct.order_id}</td>
							<td>{orderProduct.name}</td>
							<td>{orderProduct.unit}</td>
							<td>{orderProduct.unit_price}</td>
							<td>{orderProduct.quantity}</td>
							<td>{orderProduct.total}</td>
							<td>
								<div className={style.btnForm}>
									{/* <button className={sty
										<EditOutlined />
									</button> */}
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
