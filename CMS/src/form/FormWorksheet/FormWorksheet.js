import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import styles from './FormWorksheet.module.css';
import {createNewWorksheetAsync, fetchListNameByRoleAsync} from '../../redux/worksheet/action';
import {useDispatch, useSelector} from 'react-redux';

const FormWorksheetAddGuard = ({handleGetWorkSheet}) => {
	FormWorksheetAddGuard.propTypes = {
		handleGetWorkSheet: PropTypes.func.isRequired,
	};
	const dispatch = useDispatch();
	const calenderDay = useSelector((state) => state.worksheet.calenderDay);

	const [name, setName] = useState('');
	const [listName, setListName] = useState();
	const [worksheet, setWorksheet] = useState('');
	const [sheet, setSheet] = useState('');
	const [error, setError] = useState('');

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleWorksheetChange = (e) => {
		setWorksheet(e.target.value);
	};

	const handleSheetChange = (e) => {
		setSheet(e.target.value);
	};

	useEffect(() => {
		dispatch(fetchListNameByRoleAsync('guard')).then((reponse) => {
			console.log(reponse.data.data);
			setListName(reponse.data.data);
		});
	}, []);

	const handleSubmit = () => {
		// dispatch(addTaskGuard(name, worksheet, sheet));

		const formData = {
			name,
			worksheet,
			sheet,
		};
		if (name == '' || worksheet == '' || sheet == '') {
			setError('Please fill in the fields');
			return;
		}
		console.log(formData);
		dispatch(createNewWorksheetAsync(formData, 'guard'));
		// Clear input
		setName('');
		setWorksheet('');
		setSheet('');
		setError('');
		// REFRESH WORKSHEET
		handleGetWorkSheet('2023-07-10,2023-07-16');
	};

	if (!listName) {
		return;
	}

	return (
		<div className={styles.formWorksheet}>
			<div className={styles.formContainer}>
				<h1>Assign task </h1>
				<div className={styles.formContainerCenter}>
					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Guard: </h2>
						<select value={name} onChange={handleNameChange}>
							<option value="">Select Guard</option>
							{listName.map((name) => (
								<option key={name.id} value={name.id}>
									{name.name} - {name.id}
								</option>
							))}
							{/* Add more options as needed */}
						</select>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Workdays: </h2>
						<select value={worksheet} onChange={handleWorksheetChange}>
							<option value="">Select Workdays</option>
							{calenderDay.map((day, idx) => (
								<option key={idx} value={day.date}>
									{day.date} ~ {day.day_of_week}
								</option>
							))}
							{/* Add more options as needed */}
						</select>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Sheet: </h2>
						<select value={sheet} onChange={handleSheetChange}>
							<option value="">Select Sheet</option>
							<option value="1">Sheet 1</option>
							<option value="2">Sheet 2</option>
							{/* Add more options as needed */}
						</select>
					</div>
				</div>
				<h5 style={{color: 'red'}}>{error}</h5>
				<div>
					<button className={`${styles.btn} ${styles.btnAdd}`} onClick={handleSubmit}>
						Add
					</button>
				</div>
				<div className={styles.formContainerButton}>
					<button className={`${styles.btn} ${styles.btnUpdate}`}>Update</button>

					<button className={`${styles.btn} ${styles.btnDelete}`}>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default FormWorksheetAddGuard;
