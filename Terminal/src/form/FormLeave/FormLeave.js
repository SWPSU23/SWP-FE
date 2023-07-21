import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import leave from '../../assets/leaveform.png';
import styles from './FormLeave.module.css'; // Import the CSS module

import PropTypes from 'prop-types';
import {useNavigate} from 'react-router';
import {addLeaveFormAsync} from '../../redux/leave/action';

export const FormLeave = () => {
	const dispatch = useDispatch();
	const [employeeId, setEmployeeId] = useState('');
	const [numberOfLeaveDaysUsed, setNumberOfLeaveDaysUsed] = useState('');
	const [startDateOfLeave, setStartDateOfLeave] = useState('');
	const [endDateOfLeave, setEndDateOfLeave] = useState('');
	const [reasonLeave, setReasonLeave] = useState('');

	// HANDLE SUBMIT FORM
	const handleSubmitForm = () => {
		console.log('vao handleSubmitForm');

		const formData = {
			employeeId,
			numberOfLeaveDaysUsed,
			startDateOfLeave,
			endDateOfLeave,
			reasonLeave,
		};

		dispatch(addLeaveFormAsync(formData)) // Dispatch the async action
			.then((response) => {
				// Handle the response if needed
				console.log('Response:', response);

				// Clear the form fields after submit
				setEmployeeId('');
				setNumberOfLeaveDaysUsed('');
				setStartDateOfLeave('');
				setEndDateOfLeave('');
				setReasonLeave('');
			})
			.catch((error) => {
				console.log('Error:', error);
			});
	};

	const navigate = useNavigate();
	return (
		<div className={styles.formLeave}>
			<div className={styles.formContainer}>
				<div className={styles.formTitle}>
					<div>
						<img src={leave} alt="Leave Form" />
					</div>
					<h1>Leave Form</h1>
				</div>
				<div className={styles.formContainerCenter}>
					<div className={styles.formCenter}>
						<div className={styles.formRow}>
							<div className={styles.formInput}>
								<h2 className={styles.labelInput}>Employee ID: </h2>
								<input
									type="number"
									placeholder="id ..."
									value={employeeId}
									onChange={(e) => setEmployeeId(e.target.value)}
								/>
							</div>

							<div className={styles.formInput}>
								<h2 className={styles.labelInput}>Leave Used: </h2>
								<input
									type="number"
									placeholder="number ..."
									value={numberOfLeaveDaysUsed}
									onChange={(e) => setNumberOfLeaveDaysUsed(e.target.value)}
								/>
							</div>

							<div className={styles.formInput}>
								<h2 className={styles.labelInput}>Start Date: </h2>
								<input
									type="date"
									placeholder="date ..."
									value={startDateOfLeave}
									onChange={(e) => setStartDateOfLeave(e.target.value)}
								/>
							</div>
							<div className={styles.formInput}>
								<h2 className={styles.labelInput}>End Date: </h2>
								<input
									type="date"
									placeholder="date ..."
									value={endDateOfLeave}
									onChange={(e) => setEndDateOfLeave(e.target.value)}
								/>
							</div>
						</div>
					</div>
					<div className={styles.formInputReason}>
						<h2 className={styles.labelInputReason}>Reason: </h2>
						<div className={styles.inputReason}>
							<input
								placeholder=""
								value={reasonLeave}
								onChange={(e) => setReasonLeave(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className={styles.buttonSendWrap}>
					<div className={styles.buttonSend} onClick={handleSubmitForm}>
						<ButtonSmall
							style={{
								backgroundColor: '#036541',
								color: '#eee',
							}}
							title="Send"
						/>
					</div>
				</div>
				<div className={styles.buttonCancelWrap}>
					<div className={styles.buttonCancel} onClick={() => navigate('/')}>
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
