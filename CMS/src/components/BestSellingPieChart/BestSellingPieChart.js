import React, {useState} from 'react';
import {Pie} from 'react-chartjs-2';
import {top3BestSellingProductData} from '../../shared/Top3BestSellingProductData';
import {Chart as ChartJS} from 'chart.js/auto';
import style from './BestSellingPieChart.module.css';

export const BestSellingPieChart = () => {
	const [chartData, setChartData] = useState({
		labels: top3BestSellingProductData.map((data) => data.product),
		datasets: [
			{
				label: 'Products sold',
				data: top3BestSellingProductData.map((data) => data.sold),
				backgroundColor: ['#F765A3', '#A155B9', '#165BAA', '#CCF281'],
			},
		],
	});
	return (
		<div className={style.bestSellingPieChart}>
			<p className={style.title}>Top 3 best selling products</p>
			<Pie data={chartData} className={style.pieChart} />
		</div>
	);
};
