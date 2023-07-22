import React, {useState} from 'react';
import './PriceTotal.css';
import {useSelector} from 'react-redux';

export const PriceTotal = () => {
	const orderDetails = useSelector((state) => state.billOrder.orderDetails);
	let subTotal = 0;
	let totalQuantity = 0;
	let productTax = 0;
	orderDetails.map((product) => {
		totalQuantity = totalQuantity + product.quantity;
		subTotal = subTotal + product.total;
	});

	const formattedCurrency = (number) => {
		return number.toLocaleString('vi-VN', {
			style: 'currency',
			currency: 'VND',
			minimumFractionDigits: 0,
		});
	};

	console.log(formattedCurrency(subTotal));
	return (
		<div className="priceTotal">
			<div className="inputForm">
				<div className="inputTotal">
					<label>Quantity:</label>
					<input value={totalQuantity} />
				</div>
				<div className="inputTotal">
					<label>Product tax:</label>
					<input value="0" />
				</div>
				<div className="inputTotal">
					<label>Subtotal:</label>
					<input value={formattedCurrency(subTotal)} />
				</div>
				<div className="inputTotal">
					<label>Surcharge:</label>
					<input value="0" />
				</div>
			</div>
			<div className="totalForm">
				<p>TOTAL</p>
				<input value={formattedCurrency(subTotal)} />
			</div>
		</div>
	);
};
