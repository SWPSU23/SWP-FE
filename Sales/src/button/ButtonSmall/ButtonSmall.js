import React from 'react';
import './ButtonSmall.css';
import PropTypes from 'prop-types';

export const ButtonSmall = ({title, style}) => {
	ButtonSmall.propTypes = {
		title: PropTypes.string.isRequired,
		style: PropTypes.object.isRequired,
	};
	return (
		<div style={style} className="button">
			{title}
		</div>
	);
};
