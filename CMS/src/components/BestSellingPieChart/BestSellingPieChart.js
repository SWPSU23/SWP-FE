import React, {useState} from 'react';
import {Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import styles from './BestSellingPieChart.module.css';
import {data} from '../../shared/DashBoardData';

export const BestSellingPieChart = () => {
	const [chartData, setChartData] = useState({
		labels: data.top_three_best_selling_product_data.map((data) => data.product),
		datasets: [
			{
				label: 'Products sold',
				data: data.top_three_best_selling_product_data.map((data) => data.sold),
				backgroundColor: ['#F765A3', '#A155B9', '#165BAA', '#CCF281'],
			},
		],
	});
	return (
		<div className={styles.bestSellingPieChart}>
			<p className={styles.title}>Top 3 best selling products last 7 days</p>
			<Pie data={chartData} className={styles.pieChart} />
		</div>
	);
};
