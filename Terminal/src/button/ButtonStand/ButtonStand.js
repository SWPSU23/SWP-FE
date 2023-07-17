import PropTypes from 'prop-types';
import React from 'react';
import styles from './ButtonStand.module.css';

export const ButtonStand = ({img, content}) => {
	ButtonStand.propTypes = {
		img: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
	};
	return (
		<div className={styles.button}>
			<img src={img} />
			<h3>{content}</h3>
		</div>
	);
};
