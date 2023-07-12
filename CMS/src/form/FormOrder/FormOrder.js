import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {OrderProductTable} from '../../components/OrderProductTable/OrderProductTable';
import style from './FormOrder.module.css';

export const FormOrder = ({handleToggleForm, orderDetail}) => {
	console.log('open form order');
	FormOrder.propTypes = {
		orderDetail: PropTypes.object.isRequired,
		handleToggleForm: PropTypes.func.isRequired,
	};

	const [orderId, setOrderId] = useState('');
	const [employeeId, setEmployeeId] = useState('');
	const [employeeName, setEmployeeName] = useState('');
	const [totalPrice, setTotalPrice] = useState('');
	const [orderProducts, setOrderProducts] = useState([]);

	useEffect(() => {
		if (orderDetail) {
			setOrderId(orderDetail.order.order_id);
			setEmployeeId(orderDetail.order.employee_id);
			setEmployeeName(orderDetail.order.employee_name);
			setTotalPrice(orderDetail.order.total_price);
			setOrderProducts(orderDetail.orderProduct);
		}
	}, [orderDetail]);
	return (
		<div className={style.formOrder}>
			<div className={style.formContainer}>
				<h1>Employee details</h1>
				<div className={style.formInputContainer}>
					<div className={style.formInput}>
						<h2 className={style.labelInput}>Order id</h2>
						<input placeholder="Order id ..." value={orderId} />
					</div>

					<div className={style.formInput}>
						<h2 className={style.labelInput}>Employee id</h2>
						<input placeholder="Employee id ..." value={employeeId} />
					</div>

					<div className={style.formInput}>
						<h2 className={style.labelInput}>Total order value</h2>
						<input placeholder="Total order value ..." value={totalPrice} />
					</div>

					<div className={style.formInput}>
						<h2 className={style.labelInput}>Employee name</h2>
						<input placeholder="Employee name ..." value={employeeName} />
					</div>
				</div>

				<OrderProductTable orderProducts={orderProducts} />

				<div className={style.formContainerButton}>
					<button
						onClick={() => {
							handleToggleForm();
						}}
						className={`${style.btn} ${style.btnClose}`}
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};
