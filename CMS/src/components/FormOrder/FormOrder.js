import React from 'react';
import PropTypes from 'prop-types';
import {OrderProductTable} from '../OrderProductTable/OrderProductTable';
import style from './FormOrder.module.css';

export const FormOrder = ({handleToggleForm}) => {
	console.log('open form order');
	FormOrder.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};
	return (
		<div className={style.formOrder}>
			<div className={style.formContainer}>
				<h1>Employee details</h1>
				<div className={style.formInputContainer}>
					<div className={style.formInput}>
						<h2 className={style.labelInput}>Order id: </h2>
						<input placeholder="Order id ..." />
					</div>

					<div className={style.formInput}>
						<h2 className={style.labelInput}>Employee id: </h2>
						<input placeholder="Employee id ..." />
					</div>

					<div className={style.formInput}>
						<h2 className={style.labelInput}>Total order value: </h2>
						<input placeholder="Total order value ..." />
					</div>

					<div className={style.formInput}>
						<h2 className={style.labelInput}>Employee name: </h2>
						<input placeholder="Employee name ..." />
					</div>
				</div>

				<OrderProductTable />

				<div className={style.formContainerButton}>
					<button
						onClick={() => {
							handleToggleForm();
						}}
						className={`${style.btn} ${style.btnClose}`}
					>
						Close
					</button>

					<button className={`${style.btn} ${style.btnSave}`}>Save</button>
				</div>
			</div>
		</div>
	);
};
