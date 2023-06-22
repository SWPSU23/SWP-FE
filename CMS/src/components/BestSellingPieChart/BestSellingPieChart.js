import React, {useState} from 'react';
import {Pie} from 'react-chartjs-2';
import {bestSellingData} from '../../shared/BestSellingProductData';
import {Chart as ChartJS} from 'chart.js/auto';
import './BestSellingPieChart.css';

export const BestSellingPieChart = () => {
	const [chartData, setChartData] = useState({
		labels: bestSellingData.map((data) => data.product),
		datasets: [
			{
				label: 'Top 3 best selling products',
				data: bestSellingData.map((data) => data.sell),
				backgroundColor: ['#F765A3', '#A155B9', '#165BAA', '#CCF281'],
			},
		],
	});
	return (
		<div className="bestSellingPieChart">
			<p>Top 3 best selling products</p>
			<Pie data={chartData} className="pieChart" />
		</div>
	);
};
