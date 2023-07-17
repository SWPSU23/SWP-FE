import React from 'react';
import './PopupError.css';
import PropTypes from 'prop-types';

export const PopupError = ({handleToggleForm}) => {
	PopupError.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
	};
	return (
		<div className="formError">
			<div className="formContainer">
				<div className="formContainerCenter">
					<div>
						<img src="../assets/image/error.jpg" />
					</div>
					<h2>Oops</h2>
				</div>
				<div className="title">Please check and try again.</div>
				<div className="btn" onClick={handleToggleForm}>
					<button>OK</button>
				</div>
			</div>
		</div>
	);
};
