import React, {useState} from 'react';
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';
import {orderData} from '../../shared/OrderData';
import style from './Transactions.module.css';

export const Transactions = () => {
	const [chartData, setChartData] = useState({
		labels: orderData.map((data) => data.title),
		datasets: [
			{
				label: 'Order Report',
				data: orderData.map((data) => data.totalOrder),
				backgroundColor: '#F765A3',
			},
		],
	});
	return (
		<div className={style.transactions}>
			<p className={style.title}>Order Report</p>
			<Line data={chartData} className={style.lineChart} />
		</div>
	);
};
