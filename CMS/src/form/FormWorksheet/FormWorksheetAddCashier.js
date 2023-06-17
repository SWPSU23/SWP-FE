import React, {useState} from 'react';
import styles from './FormWorksheetAddCashier.module.css';
import {addTaskCashier} from '../../redux/worksheet/action';
import {useDispatch} from 'react-redux';

const FormWorksheetAddCashier = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [id, setId] = useState('');
	const [workday, setWorkday] = useState('');
	const [sheet, setSheet] = useState('');

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleIdChange = (e) => {
		setId(e.target.value);
	};

	const handleWorkdayChange = (e) => {
		setWorkday(e.target.value);
	};

	const handleSheetChange = (e) => {
		setSheet(e.target.value);
	};
	const handleSubmit = () => {
		dispatch(addTaskCashier(name, id, workday, sheet));

		const formData = {
			name,
			id,
			workday,
			sheet,
		};
		console.log(formData);
		// Clear input
		setName('');
		setId('');
		setWorkday('');
		setSheet('');
	};
	return (
		<div className={styles.formWorksheet}>
			<div className={styles.formContainer}>
				<h1>Title of the task</h1>
				<div className={styles.formContainerCenter}>
					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Name: </h2>
						<input placeholder="Name..." value={name} onChange={handleNameChange} />
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>ID: </h2>
						<input placeholder="ID..." value={id} onChange={handleIdChange} />
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Workday: </h2>
						<input
							placeholder="Workday..."
							value={workday}
							onChange={handleWorkdayChange}
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Sheet: </h2>
						<input placeholder="Sheet..." value={sheet} onChange={handleSheetChange} />
					</div>
				</div>
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

export default FormWorksheetAddCashier;
