import React from 'react';
import './Product.css';
import ProductTable from '../../components/ProductTable/ProductTable';
import {Menu} from '../../components/MenuNavi/Menu';
import {ActionBar} from '../../components/ActionBar/ActionBar';

export const Product = () => {
	return (
		<div>
			<Menu />
			<ActionBar />
			<ProductTable />
		</div>
	);
};
