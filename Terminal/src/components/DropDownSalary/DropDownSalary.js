import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './DropDownSalary.module.css';
import {fetchListToSelectMonthAsync} from '../../redux/salary/action';

export const DropDownSalary = ({handleGetSalary}) => {
	// Define propTypes for the component
	DropDownSalary.propTypes = {
		handleGetSalary: PropTypes.func.isRequired,
	};

	// Get the listMonthToRender from the Redux store
	const listMonthToRender = useSelector((state) => state.salary.listMonthToRender);
	console.log(listMonthToRender);
	// Create a dispatch function to dispatch actions
	const dispatch = useDispatch();

	// Set the initial state for selectedDate and listDay
	const [selectedDate, setSelectedDate] = useState('');
	const [listMonth, setListMonth] = useState();

	// Use useEffect to dispatch an async action to fetch listMonthToRender on component mount
	useEffect(() => {
		dispatch(fetchListToSelectMonthAsync());
	}, [dispatch]);

	// Use useEffect to update the listMonth state when listMonthToRender changes
	useEffect(() => {
		setListMonth(listMonthToRender);
	}, [listMonthToRender]);

	// Define the handleChange function to handle select changes
	const handleChange = (e) => {
		setSelectedDate(e.target.value);
		// Get start and end date
		handleGetSalary(e.target.value);
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
				{listMonth &&
					listMonth.map((item, index) => (
						<option key={index} value={`${item}`}>
							{`${item}`}
						</option>
					))}
			</select>
		</div>
	);
};
