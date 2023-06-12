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
				<h1>Employee details</h1>
				<div className="formContainerCenter">
					<div className="formInput">
						<h2 className="labelInput">Id: </h2>
						<input placeholder="id ..." />
					</div>

					<div className="formInput">
						<h2 className="labelInput">Name: </h2>
						<input placeholder="name ..." />
					</div>

					<div className="formInput">
						<h2 className="labelInput">Age: </h2>
						<input placeholder="age ..." />
					</div>

					<div className="formInput">
						<h2 className="labelInput">Email: </h2>
						<input placeholder="email ..." />
					</div>

					<div className="formInput">
						<h2 className="labelInput">Role: </h2>
						<input placeholder="role ..." />
					</div>

					<div className="formInput">
						<h2 className="labelInput">Salary: </h2>
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
