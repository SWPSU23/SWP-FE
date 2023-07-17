import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import styles from './FormWorksheet.module.css';
import {
	createNewWorksheetAsync,
	deleteWorksheetByIDAsync,
	fetchListNameByRoleAsync,
	fetchWorksheetByID,
	updateWorksheetByIDAsync,
} from '../../redux/worksheet/action';
import {useDispatch, useSelector} from 'react-redux';

const FormWorksheetAddGuard = ({handleGetWorkSheet, handleAddClick}) => {
	FormWorksheetAddGuard.propTypes = {
		handleGetWorkSheet: PropTypes.func.isRequired,
		handleAddClick: PropTypes.func.isRequired,
	};
	const dispatch = useDispatch();
	const calenderDay = useSelector((state) => state.worksheet.calenderDay);
	const worksheetDetailsFromRedux = useSelector((state) => state.worksheet).worksheetDetails;

	const [name, setName] = useState('');
	const [listName, setListName] = useState();
	const [worksheet, setWorksheet] = useState('');
	const [sheet, setSheet] = useState('');
	const [error, setError] = useState('');
	const [worksheetDetail, setWorksheetDetail] = useState('');

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
			setListName(reponse.data.data);
		});
	}, []);

	useEffect(() => {
		if (worksheetDetailsFromRedux.length > 0) {
			setWorksheetDetail(worksheetDetailsFromRedux);
		} else {
			setWorksheetDetail(worksheetDetailsFromRedux);
		}
	}, [worksheetDetailsFromRedux]);

	// HANDLE SUBMIT
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
		dispatch(createNewWorksheetAsync(formData, 'guard')).then((response) => {
			// GET DATE MATCH WITH FORM ADD
			const startDate = calenderDay[0].date;
			const endDate = calenderDay[calenderDay.length - 1].date;
			handleGetWorkSheet(`${startDate},${endDate}`);
		});
		// Clear input
		setName('');
		setWorksheet('');
		setSheet('');
		setError('');
		// REFRESH WORKSHEET
		handleAddClick();
	};

	// HANDLE UPDATE WORKSHEET
	const handleUpdate = () => {
		if (name == '') {
			setError('Please select name');
			return;
		}
		const idToDelete = worksheetDetail[0].id;
		const idEmployee = name;

		dispatch(updateWorksheetByIDAsync(idToDelete, idEmployee)).then((response) => {
			const startDate = calenderDay[0].date;
			const endDate = calenderDay[calenderDay.length - 1].date;
			handleGetWorkSheet(`${startDate},${endDate}`);
		});
		dispatch(fetchWorksheetByID(0));
		handleAddClick();
	};

	// HANDLE DELETE WORKSHEET
	const handleDelete = () => {
		console.log('vao handleDelete');
		const idToDelete = worksheetDetail[0].id;
		dispatch(fetchWorksheetByID(0));
		dispatch(deleteWorksheetByIDAsync(idToDelete)).then((response) => {
			const startDate = calenderDay[0].date;
			const endDate = calenderDay[calenderDay.length - 1].date;
			handleGetWorkSheet(`${startDate},${endDate}`);
		});
		handleAddClick();
	};

	if (!listName) {
		return;
	}

	return (
		<div className={styles.formWorksheet}>
			<div className={styles.formContainer}>
				{worksheetDetail ? (
					<div>
						<h1 style={{fontSize: 28}}>Update employee</h1>
						<h2>Sheet - {worksheetDetail[0].sheet_id}</h2>
						<h2>Date - {worksheetDetail[0].date}</h2>
					</div>
				) : (
					<h1>Assign task </h1>
				)}
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
					{worksheetDetail ? (
						<div></div>
					) : (
						<div>
							{' '}
							<div>
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
								<button
									className={`${styles.btn} ${styles.btnAdd}`}
									onClick={handleSubmit}
								>
									Add
								</button>
							</div>
						</div>
					)}
				</div>

				{worksheetDetail ? (
					<div className={styles.formContainerButton}>
						<button
							onClick={handleUpdate}
							className={`${styles.btn} ${styles.btnUpdate}`}
						>
							Update
						</button>

						<button
							onClick={handleDelete}
							className={`${styles.btn} ${styles.btnDelete}`}
						>
							Delete
						</button>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default FormWorksheetAddGuard;
