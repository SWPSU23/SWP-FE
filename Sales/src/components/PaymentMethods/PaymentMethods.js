import React from 'react';
import './PaymentMethods.css';
import {ButtonStand} from '../../button/ButtonStand/ButtonStand';
import Momo from '../../assets/Momo.png';
import Cash from '../../assets/cash.png';

export const PaymentMethods = () => {
	return (
		<div className="paymentMethods">
			<h2>Payment methods</h2>
			<div className="paymentMethodsButton">
				<ButtonStand img={Momo} content="Momo" />
				<ButtonStand img={Cash} content="Cash" />
			</div>
		</div>
	);
};
