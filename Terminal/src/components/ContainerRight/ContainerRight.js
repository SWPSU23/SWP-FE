import PropTypes from 'prop-types';
import React from 'react';
import styles from './ContainerRight.module.css';
import {CashierControl} from '../CashierControl/CashierControl';
import {PaymentMethods} from '../PaymentMethods/PaymentMethods';
import {PaymentAction} from '../PaymentAction/PaymentAction';

export const ContainerRight = ({handleToggleForm}) => {
	ContainerRight.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};
	return (
		<div className={styles.containerRight}>
			<CashierControl handleToggleForm={handleToggleForm} />
			<PaymentMethods />
			<PaymentAction />
		</div>
	);
};
