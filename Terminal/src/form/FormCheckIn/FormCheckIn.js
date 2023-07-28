import React, {useState} from 'react';
import styles from './FormCheckIn.module.css'; // Import the CSS module
import checkin from '../../assets/checkin.png';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import {useNavigate} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {actHandleCheckIn, actHandleCheckOut} from '../../redux/checkInOut/action';
import {
	alertBarCode,
	alertCheckInOut,
	alertCheckInOutSuccess,
	alertLeaveForm,
	confirmCheckIn,
	confirmCheckOut,
	confirmLeaveForm,
} from '../../components/Notify/Alert';

export const FormCheckIn = () => {
	const userInfo = useSelector((state) => state.authen.cashierInfor);
	console.log('userInfo: FormCheckIn: ' + userInfo.id);
	const dispatch = useDispatch();
	const [isCheckIn, setIsCheckIn] = useState(true);
	const handleCheckout = async () => {
		console.log('check out');

		// GET Employee ID from redux
		const employeeID = userInfo.id;

		let isCheckOut = await confirmCheckOut()
			.then((isConfirmedOut) => {
				return isConfirmedOut;
			})
			.catch((error) => {
				console.error('Confirmation error:', error);
			});
		if (isCheckOut) {
			dispatch(actHandleCheckOut(employeeID))
				.then((result) => {
					console.log('result: ' + JSON.stringify(result.response.data));
					if (result.response.data.success === false) {
						console.log(result.response.data.message.split(':')[1].trim());
						alertCheckInOut(result.response.data.message.split(':')[1].trim());
						return;
					}
				})
				.catch((error) => {
					console.log('error: ' + error);
				});
			// CHECK OUT SUCCESS
			// CLOSE CHECK-IN BUTTON
			alertCheckInOutSuccess('Check - Out');
			setIsCheckIn(true);
		}
	};
	const handleCheckIn = async () => {
		console.log('check in');

		// GET Employee ID from redux
		const employeeID = userInfo.id;

		let isCheckIn = await confirmCheckIn('Check - in')
			.then((isConfirmed) => {
				return isConfirmed;
			})
			.catch((error) => {
				console.error('Confirmation error:', error);
			});
		if (isCheckIn) {
			dispatch(actHandleCheckIn(employeeID))
				.then((result) => {
					console.log('result: ' + JSON.stringify(result.response.data));
					if (result.response.data.success === false) {
						console.log(result.response.data.message.split(':')[1].trim());
						alertCheckInOut(result.response.data.message.split(':')[1].trim());
					}
					return;
				})

				.catch((error) => {
					console.log('error: ' + error);
				});
			// CLOSE CHECK-IN BUTTON
			alertCheckInOutSuccess('Check - in');
			setIsCheckIn(false);
		}
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
