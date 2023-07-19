import React from 'react';
import './FormCheckIn.css';
import checkin from '../../assets/checkin.png';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import {useNavigate} from 'react-router';

export const FormCheckIn = () => {
	const navigate = useNavigate();
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
