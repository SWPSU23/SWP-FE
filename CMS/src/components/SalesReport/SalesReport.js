import React, {useState} from 'react';
import {Bar} from 'react-chartjs-2';
import {revenueData} from '../../shared/RevenueData';
import {Chart as ChartJS} from 'chart.js/auto';

export const SalesReport = () => {
	const [chartData, setChartData] = useState({
		labels: revenueData.map((data) => data.year),
		datasets: [
			{
				labels: 'Sales Report',
				data: revenueData.map((data) => data.revenue),
				backgroundColor: '#047857',
			},
		],
	});
	return (
		<div>
			<p>Sale Reports</p>
			<Bar data={chartData} />
		</div>
	);
};
