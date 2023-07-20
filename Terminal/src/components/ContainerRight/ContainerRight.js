import PropTypes from 'prop-types';
import React from 'react';
import styles from './ContainerRight.module.css';
import {CashierControl} from '../CashierControl/CashierControl';
import {PaymentMethods} from '../PaymentMethods/PaymentMethods';
import {PaymentAction} from '../PaymentAction/PaymentAction';
import {useSelector} from 'react-redux';

export const ContainerRight = ({handleToggleForm}) => {
	ContainerRight.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};

	const isCashier = useSelector((state) => state.authen.isCashier);
	console.log('isCashier ' + isCashier);
	return (
		<div className={styles.containerRight}>
			{isCashier ? (
				<CashierControl handleToggleForm={handleToggleForm} />
			) : (
				<div style={{marginTop: 40}}></div>
			)}
			<PaymentMethods />
			<PaymentAction />
		</div>
	);
};
