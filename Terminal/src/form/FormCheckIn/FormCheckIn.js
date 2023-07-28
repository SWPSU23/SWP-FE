import React, {useState} from 'react';
import styles from './FormCheckIn.module.css'; // Import the CSS module
import checkin from '../../assets/checkin.png';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import {useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {actHandleCheckIn, actHandleCheckOut} from '../../redux/checkInOut/action';

export const FormCheckIn = () => {
	const userInfo = useSelector((state) => state.authen.cashierInfor);
	console.log('userInfo: FormCheckIn: ' + userInfo.id);
	const dispatch = useDispatch();
	const [isCheckIn, setIsCheckIn] = useState(true);
	const handleCheckout = () => {
		console.log('check out');

		// GET Employee ID from redux
		const employeeID = userInfo.id;
		// OPEN CHECK-IN BUTTON
		setIsCheckIn(true);

		dispatch(actHandleCheckOut(employeeID));
	};
	const handleCheckIn = () => {
		console.log('check in');

		// GET Employee ID from redux
		const employeeID = userInfo.id;
		// CLOSE CHECK-IN BUTTON
		setIsCheckIn(false);

		dispatch(actHandleCheckIn(employeeID));
	};

	const navigate = useNavigate();
	return (
		<div className={styles.formCheckIn}>
			<div className={styles.formContainer}>
				<div className={styles.formTitle}>
					<div>
						<img src={checkin} alt="Check in - out" />
					</div>
					<h1>Check in - out</h1>
				</div>
				<div className={styles.buttonCheckWrap}>
					{isCheckIn ? (
						<div className={styles.buttonCheck} onClick={handleCheckIn}>
							<h1>Check in</h1>
						</div>
					) : (
						<div className={styles.buttonCheck} onClick={handleCheckout}>
							<h1>Check out</h1>
						</div>
					)}
				</div>
				<div className={styles.buttonCancelWrap}>
					<div
						className={styles.buttonCancel}
						onClick={() => {
							navigate('/');
						}}
					>
						<ButtonSmall
							style={{
								backgroundColor: '#d9d9d9',
								color: '#474C58',
							}}
							title="Cancel"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
