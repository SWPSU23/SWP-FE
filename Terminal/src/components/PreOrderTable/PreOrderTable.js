import React, {useEffect, useState} from 'react';
import style from './PreOrderTable.module.css';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import {useDispatch, useSelector} from 'react-redux';
import {deleteProductInOrder} from '../../redux/billOrder/action';

export const PreOrderTable = () => {
	let orderDetails = useSelector((state) => state.billOrder.orderDetails);
	console.log('orderDetails in PreOrderTable');
	console.log(orderDetails);
	const dispatch = useDispatch();

	const handleDeleteProductInOrder = (productId) => {
		dispatch(deleteProductInOrder(productId));
	};

	return (
		<div className={style.tableWrapper}>
			<table className={style.preOrderTable}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Total</th>
						<th className="deleteAction">Delete</th>
					</tr>
				</thead>
				<tbody>
					{orderDetails ? (
						orderDetails.map((product, index) => (
							<tr key={index}>
								<td>{product.name}</td>
								<td>{product.quantity}</td>
								<td>{product.price}</td>
								<td>{product.total}</td>
								<td>
									<ButtonSmall
										style={{backgroundColor: 'black', color: 'white'}}
										title="X"
										deleteProductId={product.id}
										handleDeleteProductInOrder={handleDeleteProductInOrder}
									/>
								</td>
							</tr>
						))
					) : (
						<tr></tr>
					)}
				</tbody>
			</table>
		</div>
	);
};
