import React from 'react';
import styles from './FormCheckIn.module.css'; // Import the CSS module
import checkin from '../../assets/checkin.png';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import {useNavigate} from 'react-router';

export const FormCheckIn = () => {
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
					<div className={styles.buttonCheck}>
						<h1>Check in</h1>
					</div>
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
