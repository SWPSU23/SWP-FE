import PropTypes from 'prop-types';
import React from 'react';
import './FormEmployee.css';

export const FormEmployee = ({handleToggleForm}) => {
	FormEmployee.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};

	return (
		<div className="formEmployee">
			<div className="formContainer">
				<h1>Employee</h1>
				<div className="formContainerCenter">
					<div className="formInput">
						<input placeholder="id ..." />
					</div>

					<div className="formInput">
						<input placeholder="name ..." />
					</div>

					<div className="formInput">
						<input placeholder="age ..." />
					</div>

					<div className="formInput">
						<input placeholder="email ..." />
					</div>

					<div className="formInput">
						<input placeholder="role ..." />
					</div>

					<div className="formInput">
						<input placeholder="salary ..." />
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
