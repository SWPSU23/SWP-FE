import React from 'react';
import styles from './FormBill.module.css';

export const FormBill = () => {
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
					<p>Võ Tấn Tài</p>
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
						<tr>
							<td>Red bull</td>
							<td>2</td>
							<td>20.000</td>
							<td>40.000</td>
						</tr>
						<tr>
							<td>Red bull</td>
							<td>2</td>
							<td>20.000</td>
							<td>40.000</td>
						</tr>
						<tr>
							<td>Red bull</td>
							<td>2</td>
							<td>20.000</td>
							<td>40.000</td>
						</tr>
						<tr>
							<td>Red bull</td>
							<td>2</td>
							<td>20.000</td>
							<td>40.000</td>
						</tr>
					</tbody>
				</table>
				<div className={styles.totals}>
					<div className={styles.total}>
						<h4>Total:</h4>
						<h4>160.000</h4>
					</div>
					<div className={styles.total}>
						<i>Discount:</i>
						<i>30.000</i>
					</div>
					<div className={styles.total}>
						<h4>Total payment:</h4>
						<h4>130.000</h4>
					</div>
				</div>
				<div className={styles.totals}>
					<div className={styles.total}>
						<p>Cash:</p>
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
