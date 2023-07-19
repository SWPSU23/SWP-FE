import React, {useState} from 'react';
import './PaymentAction.css';
import {ButtonLarge} from '../../button/ButtonLarge/ButtonLarge';
import {FormBill} from '../../form/FormBill/FormBill';
import {useSelector} from 'react-redux';

export const PaymentAction = () => {
	const [isShow, setIsShow] = useState(false);
	const orderDetails = useSelector((state) => state.orderDetails);

	const handleToggle = (e) => {
		e.stopPropagation(); // Prevent event propagation
		setIsShow(!isShow);
	};

	return (
		<div className="paymentAction" onClick={handleToggle}>
			<ButtonLarge content="Pay" />
			{isShow && <FormBill />}{' '}
		</div>
	);
};
