import PropTypes from 'prop-types';
import React from 'react';
import './FormCheckIn.css';
import checkin from '../../assets/checkin.png';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';

export const FormCheckIn = ({handleToggleForm}) => {
	FormCheckIn.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};
	return (
		<div className="formCheckIn">
			<div className="formContainer">
				<div className="formTitle">
					<div>
						<img src={checkin} />
					</div>
					<h1>Check in - out</h1>
				</div>
				<div className="buttonCheckWrap">
					<div className="buttonCheck">
						<h1>Check in</h1>
					</div>
				</div>
				<div className="buttonCancelWrap">
					<div
						className="buttonCancel"
						onClick={() => {
							handleToggleForm();
						}}
					>
						<ButtonSmall />
					</div>
				</div>
			</div>
		</div>
	);
};
