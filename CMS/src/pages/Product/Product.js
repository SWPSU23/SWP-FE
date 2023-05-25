import React from 'react';
import './Product.css';
import ProductTable from '../../components/ProductTable/ProductTable';
import {Menu} from '../../components/MenuNavi/Menu';

export const Product = () => {
	return (
		<div>
			<ProductTable />
			<Menu />
		</div>
	);
};
