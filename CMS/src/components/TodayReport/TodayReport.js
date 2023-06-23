import React from 'react';
import './TodayReport.css';
import {Stats} from '../Stats/Stats';

export const TodayReport = () => {
	const data = [
		{
			//eslint-disable-next-line no-useless-escape
			statsTitle: `TODAY\'S REVENUE`,
			statsValue: 12.45,
			compareValue: '+36%',
		},
		{
			//eslint-disable-next-line no-useless-escape
			statsTitle: `TODAY\'S REVENUE`,
			statsValue: 12.45,
			compareValue: '+36%',
		},
		{
			//eslint-disable-next-line no-useless-escape
			statsTitle: `TODAY\'S REVENUE`,
			statsValue: 12.45,
			compareValue: '+36%',
		},
		{
			//eslint-disable-next-line no-useless-escape
			statsTitle: `TODAY\'S REVENUE`,
			statsValue: 12.45,
			compareValue: '+36%',
		},
	];
	return (
		<div className="TodayReport">
			{data.map((stats, index) => (
				<Stats key={index} data={stats} />
			))}
		</div>
	);
};
