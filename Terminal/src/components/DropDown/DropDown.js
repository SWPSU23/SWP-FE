import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './DropDown.module.css'; // Import the CSS module
import {fetchListToSelectAsync} from '../../redux/worksheet/action';

export const DropDown = ({handleGetWorkSheet}) => {
	// Define propTypes for the component
	DropDown.propTypes = {
		handleGetWorkSheet: PropTypes.func.isRequired,
	};

	// Get the listDayToRender from the Redux store
	const listDayToRender = useSelector((state) => state.worksheet.listDayToRender);

	// Create a dispatch function to dispatch actions
	const dispatch = useDispatch();

	// Set the initial state for selectedDate and listDay
	const [selectedDate, setSelectedDate] = useState('');
	const [listDay, setListDay] = useState();

	// Use useEffect to dispatch an async action to fetch listDayToRender on component mount
	useEffect(() => {
		dispatch(fetchListToSelectAsync());
	}, [dispatch]);

	// Use useEffect to update the listDay state when listDayToRender changes
	useEffect(() => {
		setListDay(listDayToRender.list_week);
	}, [listDayToRender]);

	// Define the handleChange function to handle select changes
	const handleChange = (e) => {
		setSelectedDate(e.target.value);
		// Get start and end date
		handleGetWorkSheet(e.target.value);
	};

	// Render the dropdown select element with date options
	return (
		<div className={styles['dropdown-container']}>
			<select
				className={styles['dropdown-select']}
				value={selectedDate}
				onChange={handleChange}
			>
				{/* Add a conditional check before rendering date options */}
				{/* <option style={{display: 'flex', textAlign: 'center'}}>
					---------------------------------
				</option> */}
				{listDay &&
					listDay.map((item, index) => (
						<option key={index} value={`${item.from_date},${item.to_date}`}>
							{`${item.from_date} to ${item.to_date}`}
						</option>
					))}
			</select>
		</div>
	);
};
