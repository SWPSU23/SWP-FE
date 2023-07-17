import React from 'react';
import './PaymentAction.css';
import {ButtonLarge} from '../../button/ButtonLarge/ButtonLarge';

export const PaymentAction = () => {
	return (
		<div className="paymentAction">
			<ButtonLarge content="Pay" />
		</div>
	);
};
