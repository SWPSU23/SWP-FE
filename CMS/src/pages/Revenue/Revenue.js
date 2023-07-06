import React from 'react';
import styles from './Revenue.module.css';
import {Menu} from '../../components/MenuNavi/Menu';
import {Header} from '../../components/Header/Header';

export const Revenue = () => {
	return (
		<div className={styles.revenuePage}>
			<Menu />
			<Header img="../assets/image/revenue.jpg" h2="Revenue" />
		</div>
	);
};
