import React, {useState} from 'react';
import styles from './BestSellingProducts.module.css';
import {ProgressBar} from '../ProgressBar/ProgressBar';
import {data} from '../../shared/DashBoardData';

export const BestSellingProducts = () => {
	return (
		<div className={styles.bestSelling}>
			<p className={styles.title}>Best selling product last 7 days</p>
			{data.weekly_best_selling_product_data.map((product) => (
				<ProgressBar key={product.id} progressData={product} />
			))}
		</div>
	);
};
