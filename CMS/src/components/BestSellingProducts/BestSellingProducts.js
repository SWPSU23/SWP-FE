import React, {useState} from 'react';
import styles from './BestSellingProducts.module.css';
import {ProgressBar} from '../ProgressBar/ProgressBar';
import {bestSellingProductData} from '../../shared/BestSellingProductData';

export const BestSellingProducts = () => {
	return (
		<div className={styles.bestSelling}>
			<p className={styles.title}>Best selling product</p>
			{bestSellingProductData.map((product) => (
				<ProgressBar key={product.id} progressData={product} />
			))}
		</div>
	);
};
