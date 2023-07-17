import React from 'react';
import './PopupSuccess.css';
import PropTypes from 'prop-types';

export const PopupSuccess = ({handleToggleForm}) => {
	PopupSuccess.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};
	return (
		<div className="formSuccess">
			<div className="formContainer">
				<div className="formContainerCenter">
					<div>
						<img src="../assets/image/success.jpg" />
					</div>
					<h2>Success</h2>
				</div>
				<div className="title">Thank for your message. It has been sent.</div>
				<div className="btn" onClick={handleToggleForm}>
					<button>OK</button>
				</div>
			</div>
		</div>
	);
};
