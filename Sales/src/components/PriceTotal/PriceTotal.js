import React from 'react';
import './PriceTotal.css';

export const PriceTotal = () => {
	return (
		<div className="priceTotal">
			<div className="inputForm">
				<div className="inputTotal">
					<label>Quantity:</label>
					<input value="15" />
				</div>
				<div className="inputTotal">
					<label>Product tax:</label>
					<input value="0" />
				</div>
				<div className="inputTotal">
					<label>Subtotal:</label>
					<input value="300.000" />
				</div>
				<div className="inputTotal">
					<label>Surcharge:</label>
					<input value="0" />
				</div>
			</div>
			<div className="totalForm">
				<p>TOTAL</p>
				<input value="300.000" />
			</div>
		</div>
	);
};
