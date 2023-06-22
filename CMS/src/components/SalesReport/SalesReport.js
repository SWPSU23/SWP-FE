import React, {useState} from 'react';
import {Bar} from 'react-chartjs-2';
import {revenueData} from '../../shared/RevenueData';
import {Chart as ChartJS} from 'chart.js/auto';
import style from './SalesReport.module.css';

export const SalesReport = () => {
	const [chartData, setChartData] = useState({
		labels: revenueData.map((data) => data.year),
		datasets: [
			{
				label: 'Revenue',
				data: revenueData.map((data) => data.revenue),
				backgroundColor: '#047857',
			},
		],
	});
	return (
		<div className={style.salesReport}>
			<p className={style.title}>Sale Reports</p>
			<Bar data={chartData} className={style.barChart} />
		</div>
	);
};
