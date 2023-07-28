import React, {useState} from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import style from './SalesReport.module.css';
import {data} from '../../shared/DashBoardData';

export const SalesReport = () => {
	const [chartData, setChartData] = useState({
		labels: data.last_seven_days_revenue.map((data) => data.day),
		datasets: [
			{
				label: 'Revenue',
				data: data.last_seven_days_revenue.map((data) => data.revenue),
				backgroundColor: '#047857',
			},
		],
	});
	return (
		<div className={style.salesReport}>
			<p className={style.title}>Revenue report last 7 days</p>
			<Bar data={chartData} className={style.barChart} />
		</div>
	);
};
