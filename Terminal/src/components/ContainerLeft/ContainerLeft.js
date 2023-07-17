import React from 'react';
import './ContainerLeft.css';
import {OrderControl} from '../OrderControl/OrderControl';
import {PriceTotal} from '../PriceTotal/PriceTotal';

export const ContainerLeft = () => {
	return (
		<div className="containerLeft">
			<OrderControl />
			<PriceTotal />
		</div>
	);
};
