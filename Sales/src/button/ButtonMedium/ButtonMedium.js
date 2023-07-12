import PropTypes from 'prop-types';
import React from 'react';
import styles from './ButtonMedium.module.css';

export const ButtonMedium = ({img, content}) => {
	ButtonMedium.propTypes = {
		img: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
	};
	return (
		<div className={styles.button}>
			<div className={styles.buttonIcon}>
				<img src={img} />
			</div>
			<p>{content}</p>
		</div>
	);
};
