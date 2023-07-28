import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import './DropDownPayroll.css'; // Import the CSS file
import {useDispatch, useSelector} from 'react-redux';
import {actChange, fetchCalenderDay, fetchListToSelectAsync} from '../../redux/worksheet/action';
import Loading from '../Loading/Loading';
import {fetchMonthListAsync} from '../../redux/salary/action';

export const DropDownPayroll = ({handleGetMonth}) => {
	DropDownPayroll.propTypes = {
		handleGetMonth: PropTypes.func.isRequired,
	};

	const listMonthDropdown = useSelector((state) => state.salary.monthList);
	const dispatch = useDispatch();
	const [selectedDate, setSelectedDate] = useState('');
	const [listMonth, setListMonth] = useState();

	// DISPLAY DATE
	useEffect(() => {
		dispatch(fetchMonthListAsync()).then((response) => {
			console.log(listMonthDropdown);
		});
	}, []);

	useEffect(() => {
		setListMonth(listMonthDropdown);
		if (listMonthDropdown) {
			handleGetMonth(listMonthDropdown[0]);
		}
		// handleGetWorkSheet(listDayToRender.current_week);
	}, [listMonthDropdown]);

	// HANDLE SELECT DAY
	const handleChange = (e) => {
		setSelectedDate(e.target.value);
		// Get start and end date
		console.log('change', e.target.value);
		handleGetMonth(e.target.value);
	};

	if (!listMonth) {
		<Loading />;
		return;
	}
	console.log(listMonth);
	if (!listMonth) {
		return;
	}
	return (
		<div className="dropdown-container">
			<select className="dropdown-select" value={selectedDate} onChange={handleChange}>
				{/* <option value="">Select a date range</option> */}
				{listMonth.map((item, index) => (
					<option key={index} value={`${item}`}>
						{`${item}`}
					</option>
				))}
			</select>
		</div>
	);
};
