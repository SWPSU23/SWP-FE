import React from 'react';
import styles from './TodayReport.module.css';
import {Stats} from '../Stats/Stats';
import {data} from '../../shared/DashBoardData';

export const TodayReport = () => {
	const todayData = data.today_data.map((data) => {
		let compareValue = '';
		let percentValue = data.stats_value / data.past_value;
		let newPercentValue = 0;
		if (percentValue > 1) {
			newPercentValue = (percentValue - 1) * 100;
			if (`${newPercentValue}`.length > 5) {
				compareValue = newPercentValue.toFixed(2);
			} else {
				compareValue = `${newPercentValue}`;
			}
			compareValue = `+${compareValue}%`;
		} else if (percentValue < 1) {
			newPercentValue = (1 - percentValue) * 100;
			if (`${newPercentValue}`.length > 5) {
				compareValue = newPercentValue.toFixed(2);
			} else {
				compareValue = `${newPercentValue}`;
			}
			compareValue = `-${compareValue}%`;
		} else {
			compareValue = `+0%`;
		}

		return {
			statsTitle: data.stats_title,
			statsValue: data.stats_value,
			compareValue: compareValue,
		};
	});
	console.log(data.today_data);
	console.log(todayData);

	return (
		<div className={styles.TodayReport}>
			{todayData.map((stats, index) => (
				<Stats key={index} data={stats} />
			))}
		</div>
	);
};
