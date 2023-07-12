import React from 'react';
import './OrderControl.css';
import {BarCode} from '../Barcode/Barcode';
import {PreOrderTable} from '../PreOrderTable/PreOrderTable';

export const OrderControl = () => {
	return (
		<div className="orderControl">
			<BarCode />
			<PreOrderTable />
		</div>
	);
};
