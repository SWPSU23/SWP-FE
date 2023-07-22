import React, {useState} from 'react';
import style from './Barcode.module.css';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import {useDispatch} from 'react-redux';
import {addOrderDetailAsync} from '../../redux/billOrder/action';

export const BarCode = () => {
	const dispatch = useDispatch();
	const [barcode, setBarcode] = useState('');
	const clearBarcode = () => {
		setBarcode('');
	};
	const hadnleAddProduct = () => {
		console.log('add product have barcode', barcode);
		dispatch(addOrderDetailAsync(barcode));
	};
	return (
		<div className={style.barcodeWrapper}>
			<p className={style.title}>Barcode</p>
			<div className={style.barcode}>
				<input
					onChange={(e) => setBarcode(e.target.value)}
					value={barcode}
					type="text"
					className={style.barcodeInput}
					placeholder="Barcode ...."
				/>
				<div className={style.actions}>
					<ButtonSmall
						style={{
							backgroundColor: '#036541',
							color: 'white',
							margin: '0px 20px',
						}}
						title="Add product"
						hadnleAddProduct={hadnleAddProduct}
					/>
					<ButtonSmall
						style={{
							backgroundColor: '#000000',
							color: 'white',
						}}
						title="Clear"
						clearBarcode={clearBarcode}
					/>
				</div>
			</div>
		</div>
	);
};
