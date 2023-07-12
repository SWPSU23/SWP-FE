import React from 'react';
import './CashierControl.css';
import {ButtonMedium} from '../../button/ButtonMedium/ButtonMedium';
import checkin from '../../assets/checkin.png';
import salary from '../../assets/salary.png';
import worksheet from '../../assets/worksheet.png';
import leaveform from '../../assets/leaveform.png';

const cashierFunction = [
	{
		id: 1,
		content: 'Check in - out',
		img: checkin,
	},
	{
		id: 2,
		content: 'Work-sheet',
		img: worksheet,
	},
	{
		id: 3,
		content: 'Salary',
		img: salary,
	},
	{
		id: 4,
		content: 'Leave Form',
		img: leaveform,
	},
];

export const CashierControl = () => {
	return (
		<div className="cashierControl">
			{cashierFunction.map((item) => (
				<ButtonMedium key={item.id} content={item.content} img={item.img} />
			))}
		</div>
	);
};
