import PropTypes from 'prop-types';
import React from 'react';
import './FormUser.css';

export const FormUser = ({handleToggleForm}) => {
	FormUser.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};

	return (
		<div className="formUser">
			<div className="formContainer">
				<h1>User</h1>
				<div className="formContainerCenter">
					<div className="formInput">
						<input placeholder="id ..." />
					</div>

					<div className="formInput">
						<input placeholder="name ..." />
					</div>

					<div className="formInput">
						<input placeholder="phone number ..." />
					</div>
				</div>

				<div className="formContainerButton">
					<button
						onClick={() => {
							handleToggleForm();
						}}
						className="btn btnClose"
					>
						Close
					</button>

					<button className="btn btnSave">Save</button>
				</div>
			</div>
		</div>
	);
};
