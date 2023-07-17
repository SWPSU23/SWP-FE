import PropTypes from 'prop-types';
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

export const CashierControl = ({handleToggleForm}) => {
	CashierControl.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};

	const handleToggleFormByCashier = () => {
		handleToggleForm();
	};

	return (
		<div className="cashierControl">
			{cashierFunction.map((item) => (
				<div key={item.id} onClick={handleToggleFormByCashier}>
					<ButtonMedium content={item.content} img={item.img} />
				</div>
			))}
		</div>
	);
};
