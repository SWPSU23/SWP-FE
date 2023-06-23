import React from 'react';
import style from './ProgressBar.module.css';
import PropTypes from 'prop-types';

export const ProgressBar = ({progressData}) => {
	ProgressBar.propTypes = {
		progressData: PropTypes.object.isRequired,
	};

	return (
		<div className={style.progressBar}>
			<div className={style.progressContent}>
				<p className={style.title}>{progressData.product}</p>
				<p className={style.quantity}>{progressData.totalSold}</p>
			</div>
			<div className={style.progressBarWrapper}>
				<div className={style.progress} style={{width: `${progressData.percent}%`}}></div>
			</div>
		</div>
	);
};
