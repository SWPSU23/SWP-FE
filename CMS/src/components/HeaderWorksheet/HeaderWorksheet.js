import React, {useState} from 'react';
import {CashierWorksheet} from '../../components/CashierWorksheet/CashierWorksheet';
import {GuardWorksheet} from '../../components/GuardWorksheet/GuardWorkshhet';
import styles from './HeaderWorksheet.module.css';
import FormWorksheet from '../../form/FormWorksheet/FormWorksheet';

const HeaderWorksheet = () => {
	const [isGuard, setIsGuard] = useState(true);
	const [isAdd, setIsAdd] = useState(false);

	const handleGuardClick = () => {
		setIsGuard(true);
	};

	const handleCashierClick = () => {
		setIsGuard(false);
	};
	const handleAddClick = () => {
		setIsAdd(!isAdd);
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
			<div>{isGuard ? <GuardWorksheet /> : <CashierWorksheet />}</div>
			<div>{isAdd ? <FormWorksheet /> : null}</div>
		</div>
	);
};

export default HeaderWorksheet;
