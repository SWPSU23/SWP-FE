import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import leave from '../../assets/leaveform.png';
import './FormLeave.css';
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
		<div className="formLeave">
			<div className="formContainer">
				<div className="formTitle">
					<div>
						<img src={leave} />
					</div>
					<h1>Leave Form</h1>
				</div>
				<div className="formContainerCenter">
					<div className="formCenter">
						<div className="formRow">
							<div className="formInput">
								<h2 className="labelInput">Employee ID: </h2>
								<input
									type="number"
									placeholder="id ..."
									value={employeeId}
									onChange={(e) => setEmployeeId(e.target.value)}
								/>
							</div>

							<div className="formInput">
								<h2 className="labelInput">Leave Used: </h2>
								<input
									type="number"
									placeholder="number ..."
									value={numberOfLeaveDaysUsed}
									onChange={(e) => setNumberOfLeaveDaysUsed(e.target.value)}
								/>
							</div>

							<div className="formInput">
								<h2 className="labelInput">Start Date: </h2>
								<input
									type="date"
									placeholder="date ..."
									value={startDateOfLeave}
									onChange={(e) => setStartDateOfLeave(e.target.value)}
								/>
							</div>
							<div className="formInput">
								<h2 className="labelInput">End Date: </h2>
								<input
									type="date"
									placeholder="date ..."
									value={endDateOfLeave}
									onChange={(e) => setEndDateOfLeave(e.target.value)}
								/>
							</div>
						</div>
					</div>
					<div className="formInputReason">
						<h2 className="labelInputReason">Reason: </h2>
						<div className="inputReason">
							<input
								placeholder=""
								value={reasonLeave}
								onChange={(e) => setReasonLeave(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className="buttonSendWrap">
					<div className="buttonSend" onClick={handleSubmitForm}>
						<ButtonSmall
							style={{
								backgroundColor: '#036541',
								color: '#eee',
							}}
							title="Send"
						/>
					</div>
				</div>
				<div className="buttonCancelWrap">
					<div className="buttonCancel" onClick={() => navigate('/')}>
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
