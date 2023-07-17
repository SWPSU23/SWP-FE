import React from 'react';
import styles from './ButtonSmall.module.css';
import PropTypes from 'prop-types';

export const ButtonSmall = ({title, style}) => {
	ButtonSmall.propTypes = {
		title: PropTypes.string.isRequired,
		style: PropTypes.object.isRequired,
	};
	return (
		<div style={style} className={styles.button}>
			{title}
		</div>
	);
};
