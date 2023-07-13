import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import leave from '../../assets/leaveform.png';
import './FormLeave.css';
import saleicon from '../../assets/saleimage.png';

export const FormLeave = ({handleToggleForm}) => {
	FormLeave.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};

	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [reason, setReason] = useState('');

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
								<h2 className="labelInput">ID: </h2>
								<input
									placeholder="id ..."
									value={id}
									onChange={(e) => setId(e.target.value)}
								/>
							</div>

							<div className="formInput">
								<h2 className="labelInput">Name: </h2>
								<input
									placeholder="name ..."
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>

							<div className="formInput">
								<h2 className="labelInput">Start Date: </h2>
								<input
									placeholder="date ..."
									value={startDate}
									onChange={(e) => setStartDate(e.target.value)}
								/>
							</div>
							<div className="formInput">
								<h2 className="labelInput">End Date: </h2>
								<input
									placeholder="date ..."
									value={endDate}
									onChange={(e) => setEndDate(e.target.value)}
								/>
							</div>
						</div>
					</div>
					<div className="formInputReason">
						<h2 className="labelInputReason">Reason: </h2>
						<div className="inputReason">
							<input
								placeholder=""
								value={reason}
								onChange={(e) => setReason(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className="buttonSendWrap">
					<div className="buttonSend">
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
					<div
						className="buttonCancel"
						onClick={() => {
							handleToggleForm();
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
