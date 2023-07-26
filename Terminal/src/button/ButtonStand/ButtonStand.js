import PropTypes from 'prop-types';
import React from 'react';
import styles from './ButtonStand.module.css';

export const ButtonStand = ({img, content, onClick, active}) => {
	ButtonStand.propTypes = {
		img: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
		active: PropTypes.bool, // Add the active propType
	};

	return (
		<div className={`${styles.button} ${active ? styles.active : ''}`} onClick={onClick}>
			<img src={img} alt={content} />
			<h3>{content}</h3>
		</div>
	);
};
