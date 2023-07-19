import PropTypes from 'prop-types';
import React from 'react';
import './CashierControl.css';
import {ButtonMedium} from '../../button/ButtonMedium/ButtonMedium';
import checkin from '../../assets/checkin.png';
import salary from '../../assets/salary.png';
import worksheet from '../../assets/worksheet.png';
import leaveform from '../../assets/leaveform.png';
import {NavLink} from 'react-router-dom';

const cashierFunction = [
	{
		id: 1,
		content: 'Check in - out',
		img: checkin,
		link: '/checkin',
	},
	{
		id: 2,
		content: 'Work-sheet',
		img: worksheet,
		link: '/worksheet',
	},
	{
		id: 3,
		content: 'Salary',
		img: salary,
		link: '/salary',
	},
	{
		id: 4,
		content: 'Leave Form',
		img: leaveform,
		link: '/leave',
	},
];

export const CashierControl = ({handleToggleForm}) => {
	CashierControl.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};

	const handleToggleFormByCashier = (form) => {
		console.log('form', form);
		handleToggleForm(form);
	};

	return (
		<div className="cashierControl">
			{cashierFunction.map((item) => (
				<div key={item.id} onClick={handleToggleFormByCashier}>
					<NavLink to={item.link} activeClassName="active" exact>
						<ButtonMedium content={item.content} img={item.img} />
					</NavLink>
				</div>
			))}
		</div>
	);
};
