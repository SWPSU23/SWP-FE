import PropTypes from 'prop-types';
import React from 'react';
import styles from './ButtonLarge.module.css';
import payaction from '../../assets/payaction.png';

export const ButtonLarge = ({img, content}) => {
	ButtonLarge.propTypes = {
		img: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
	};
	return (
		<div className={styles.button}>
			<div className={styles.buttonIcon}>
				<img src={payaction} />
			</div>
			<h3>{content}</h3>
		</div>
	);
};
