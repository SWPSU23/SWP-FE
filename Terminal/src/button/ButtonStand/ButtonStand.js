import PropTypes from 'prop-types';
import React from 'react';
import styles from './ButtonStand.module.css';

export const ButtonStand = ({img, content, onClick}) => {
	ButtonStand.propTypes = {
		img: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired, // Add onClick propType
	};

	return (
		<div className={styles.button} onClick={onClick}>
			{' '}
			{/* Assign onClick prop */}
			<img src={img} alt={content} />
			<h3>{content}</h3>
		</div>
	);
};
