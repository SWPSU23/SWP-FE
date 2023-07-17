import React, {useEffect, useState} from 'react';
import {CashierWorksheet} from '../../components/CashierWorksheet/CashierWorksheet';
import {GuardWorksheet} from '../GuardWorksheet/GuardWorksheet';
import styles from './HeaderWorksheet.module.css';
import FormWorksheet from '../../form/FormWorksheet/FormWorksheet';
import {DropDown} from '../DropDown/DropDown';
import {featchAllWorksheetByDate, fetchCalenderDayAsync} from '../../redux/worksheet/action';
import {useDispatch} from 'react-redux';

const HeaderWorksheet = () => {
	const dispatch = useDispatch();
	const [isGuard, setIsGuard] = useState(true);
	const [isAdd, setIsAdd] = useState(false);
	const [worksheet, setWorksheet] = useState();

	const handleGuardClick = () => {
		setIsGuard(true);
	};

	const handleCashierClick = () => {
		setIsGuard(false);
	};
	const handleAddClick = () => {
		setIsAdd(!isAdd);
	};

	// HANDLE GET WORKSHEET
	useEffect(() => {
		const defaultWorkSheet = '2023-07-10,2023-07-16';
		handleGetWorkSheet(defaultWorkSheet);
	}, [isGuard]);

	const handleGetWorkSheet = (date) => {
		// console.log('vao handleGetWorkSheet');

		const daySelect = date.split(',');
		const startDate = daySelect[0];
		const endDate = daySelect[1];
		dispatch(fetchCalenderDayAsync(startDate, endDate));
		const employee = isGuard ? 'guard' : 'cashier';
		console.log('employee: ' + employee);

		dispatch(featchAllWorksheetByDate(startDate, endDate, employee)).then((response) => {
			setWorksheet(response.data.data);
		});
	};

	return (
		<div>
			<div className={styles.btnContainer}>
				<button
					className={`${styles.button} ${isGuard ? styles.active : ''}`}
					onClick={handleGuardClick}
				>
					Guard
				</button>
				<button
					className={`${styles.button} ${!isGuard ? styles.active : ''}`}
					onClick={handleCashierClick}
				>
					Cashier
				</button>
				<button className={styles.addButton} onClick={handleAddClick}>
					Add Task
				</button>
			</div>
			<div>
				<div>
					<DropDown handleGetWorkSheet={handleGetWorkSheet} />
				</div>
			</div>
			<div>
				{isGuard ? (
					<GuardWorksheet
						handleGetWorkSheet={handleGetWorkSheet}
						worksheet={worksheet}
						add={isAdd}
						handleAddClick={handleAddClick}
					/>
				) : (
					<CashierWorksheet
						handleGetWorkSheet={handleGetWorkSheet}
						worksheet={worksheet}
						add={isAdd}
						handleAddClick={handleAddClick}
					/>
				)}
			</div>
			{/* <div>{isAdd ? <FormWorksheet /> : <div></div>}</div> */}
		</div>
	);
};

export default HeaderWorksheet;
