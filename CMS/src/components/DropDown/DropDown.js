import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import './DropDown.css'; // Import the CSS file
import {useDispatch, useSelector} from 'react-redux';
import {actChange, fetchCalenderDay, fetchListToSelectAsync} from '../../redux/worksheet/action';
import Loading from '../Loading/Loading';

export const DropDown = ({handleGetWorkSheet}) => {
	DropDown.propTypes = {
		handleGetWorkSheet: PropTypes.func.isRequired,
	};

	const listDayToRender = useSelector((state) => state.worksheet.listDayToRender);
	const dispatch = useDispatch();
	const [selectedDate, setSelectedDate] = useState('');
	const [listDay, setListDay] = useState();
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();

	// DISPLAY DATE
	useEffect(() => {
		console.log('vao day');

		dispatch(fetchListToSelectAsync());
	}, []);

	useEffect(() => {
		setListDay(listDayToRender);
	}, [listDayToRender]);

	// HANDLE SELECT DAY
	const handleChange = (e) => {
		setSelectedDate(e.target.value);
		// Get start and end date
		handleGetWorkSheet(e.target.value);
		dispatch(actChange(true));
	};

	if (!listDay) {
		<Loading />;
		return;
	}
	return (
		<div className="dropdown-container">
			<select className="dropdown-select" value={selectedDate} onChange={handleChange}>
				{/* <option value="">Select a date range</option> */}
				{listDay.map((item, index) => (
					<option key={index} value={`${item.from_date},${item.to_date}`}>
						{`${item.from_date} to ${item.to_date}`}
					</option>
				))}
			</select>
		</div>
	);
};
