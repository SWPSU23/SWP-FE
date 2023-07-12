import React from 'react';
import style from './Barcode.module.css';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';

export const BarCode = () => {
	return (
		<div className={style.barcodeWrapper}>
			<p className={style.title}>Barcode</p>
			<div className={style.barcode}>
				<input type="text" className={style.barcodeInput} placeholder="Barcode ...." />
				<div className={style.actions}>
					<ButtonSmall
						style={{
							backgroundColor: '#036541',
							color: 'white',
							margin: '0px 20px',
						}}
						title="Add product"
					/>
					<ButtonSmall
						style={{
							backgroundColor: '#000000',
							color: 'white',
						}}
						title="Clear"
					/>
				</div>
			</div>
		</div>
	);
};
