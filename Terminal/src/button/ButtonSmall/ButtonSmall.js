import React from 'react';
import styles from './ButtonSmall.module.css';
import PropTypes from 'prop-types';

export const ButtonSmall = ({
	title,
	style,
	clearBarcode,
	hadnleAddProduct,
	handleDeleteProductInOrder,
	deleteProductId,
}) => {
	ButtonSmall.propTypes = {
		title: PropTypes.string.isRequired,
		style: PropTypes.object.isRequired,
		clearBarcode: PropTypes.func,
		hadnleAddProduct: PropTypes.func,
		handleDeleteProductInOrder: PropTypes.func,
		deleteProductId: PropTypes.number,
	};

	const handleFunction = () => {
		if (clearBarcode) {
			clearBarcode();
		} else if (hadnleAddProduct) {
			hadnleAddProduct();
		} else if (handleDeleteProductInOrder) {
			handleDeleteProductInOrder(deleteProductId);
		}
	};
	return (
		<div onClick={handleFunction} style={style} className={styles.button}>
			{title}
		</div>
	);
};
