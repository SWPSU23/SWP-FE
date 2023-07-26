import React, {useState} from 'react';
import './PaymentAction.css';
import {ButtonLarge} from '../../button/ButtonLarge/ButtonLarge';
import {FormBill} from '../../form/FormBill/FormBill';
import {useDispatch, useSelector} from 'react-redux';
import {actCreateOrder, clearProductInOrder} from '../../redux/billOrder/action';

export const PaymentAction = () => {
	const dispatch = useDispatch();
	let orderDetails = useSelector((state) => state.billOrder.orderDetails);
	const [isShow, setIsShow] = useState(false);

	const handleToggle = (e) => {
		// CONVERT TO FIX WITH BODY API
		const orderListToPay = orderDetails.map((item) => ({
			product_id: item.id,
			quantity: item.quantity,
		}));
		// get ID account form Redux
		const employeeId = 7;
		dispatch(actCreateOrder(employeeId, orderListToPay)).then((response) => {
			dispatch(clearProductInOrder('ninh'));
		});

		e.stopPropagation(); // Prevent event propagation
		// setIsShow(!isShow);
	};

	return (
		<div className="paymentAction" onClick={handleToggle}>
			<ButtonLarge content="Pay" />
			{isShow && <FormBill />}{' '}
		</div>
	);
};
