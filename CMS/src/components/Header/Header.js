import React from 'react';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

export const Header = ({img, h2}) => {
	Header.propTypes = {
		img: PropTypes.string.isRequired,
		h2: PropTypes.string.isRequired,
	};
	return (
		<div className={styles.headerIcon}>
			<div className={styles.imgIcon}>
				<img src={img} />
			</div>
			<div className={styles.nameIcon}>{h2}</div>
		</div>
	);
};
