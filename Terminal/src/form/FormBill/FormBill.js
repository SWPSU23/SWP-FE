import PropTypes from 'prop-types';
import React from 'react';
import styles from './FormBill.module.css';
import {useSelector} from 'react-redux';

export const FormBill = () => {
	FormBill.propTypes = {
		selectedPaymentMethod: PropTypes.string, // The selectedPaymentMethod prop is optional and of type string
	};
	let orderDetails = useSelector((state) => state.billOrder.orderDetails);
	const selectedPaymentMethod = useSelector((state) => state.billOrder.selectedPaymentMethod);
	console.log('orderDetails in PreOrderTable');
	console.log(orderDetails);
	let subTotal = 0;
	let totalQuantity = 0;

	orderDetails.map((product) => {
		totalQuantity = totalQuantity + product.quantity;
		subTotal = subTotal + product.total;
	});

	const formattedCurrency = (number) => {
		return number.toLocaleString('vi-VN', {
			style: 'currency',
			currency: 'VND',
			minimumFractionDigits: 0,
		});
	};

	return (
		<div className={styles.formBill}>
			<div className={styles.formContainer}>
				<h2>Bill</h2>

				<div className={styles.title}>
					<h4>Day:</h4>
					<p>19/07/2023</p>
				</div>
				<div className={styles.title}>
					<h4>Cashier:</h4>
					<p>Huỳnh Chí Bảo</p>
				</div>
				<table className={styles.orderTable}>
					<thead>
						<tr>
							<th>Name</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Total</th>
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
								</tr>
							))
						) : (
							<tr></tr>
						)}
					</tbody>
				</table>
				<div className={styles.totals}>
					<div className={styles.total}>
						<h4>Total:</h4>
						<h4>{formattedCurrency(subTotal)}</h4>
					</div>
					<div className={styles.total}>
						<i>Discount:</i>
						<i>0</i>
					</div>
					<div className={styles.total}>
						<h4>Total payment:</h4>
						<h4>{formattedCurrency(subTotal)}</h4>
					</div>
				</div>
				<div className={styles.totals}>
					<div className={styles.total}>
						<p>{selectedPaymentMethod === 'Momo' ? 'Momo' : 'Cash'}:</p>
						<p>200.000</p>
					</div>
					<div className={styles.total}>
						<h4>Money change:</h4>
						<h4>70.000</h4>
					</div>
				</div>
				<div className={styles.footer}>
					<b>Thank you for shopping at Ministore!</b>
				</div>
			</div>
		</div>
	);
};
