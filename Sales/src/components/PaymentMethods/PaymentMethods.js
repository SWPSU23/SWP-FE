import React from 'react';
import styles from './PaymentMethods.module.css';
import {ButtonStand} from '../../button/ButtonStand/ButtonStand';
import Momo from '../../assets/Momo.png';
import Cash from '../../assets/cash.png';

export const PaymentMethods = () => {
	return (
		<div className={styles.paymentMethods}>
			<h2>Payment methods</h2>
			<div className={styles.paymentMethodsButton}>
				<ButtonStand img={Momo} content="Momo" />
				<ButtonStand img={Cash} content="Cash" />
			</div>
		</div>
	);
};
