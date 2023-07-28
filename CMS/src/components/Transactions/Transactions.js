import React, {useState} from 'react';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import style from './Transactions.module.css';
import {data} from '../../shared/DashBoardData';

export const Transactions = () => {
	const [chartData, setChartData] = useState({
		labels: data.order_last_seven_days_data.map((data) => data.title),
		datasets: [
			{
				label: 'Order Report',
				data: data.order_last_seven_days_data.map((data) => data.total_order),
				backgroundColor: '#F765A3',
			},
		],
	});
	return (
		<div className={style.transactions}>
			<p className={style.title}>Order report last 7 days</p>
			<Line data={chartData} className={style.lineChart} />
		</div>
	);
};
