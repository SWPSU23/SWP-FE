import React from 'react';
import styles from './ContainerRight.module.css';
import {CashierControl} from '../CashierControl/CashierControl';
import {PaymentMethods} from '../PaymentMethods/PaymentMethods';
import {PaymentAction} from '../PaymentAction/PaymentAction';

export const ContainerRight = () => {
	return (
		<div className={styles.containerRight}>
			<CashierControl />
			<PaymentMethods />
			<PaymentAction />
		</div>
	);
};
