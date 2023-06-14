import React from 'react';
import './Revenue.css';
import {Menu} from '../../components/MenuNavi/Menu';
import {Header} from '../../components/Header/Header';

export const Revenue = () => {
	return (
		<div className="revenuePage">
			<Menu />
			<Header img="../assets/image/revenue.jpg" h2="Revenue" />
		</div>
	);
};
