import React from 'react';
import PropTypes from 'prop-types';
import {ArrowUpOutlined} from '@ant-design/icons';
import styles from './Stats.module.css';

export const Stats = (props) => {
	Stats.propTypes = {
		data: PropTypes.object.isRequired,
	};
	const data = props.data;
	console.log(data);
	return (
		<div className={styles.stats}>
			<p className={styles.statsTitle}>{data.statsTitle}</p>
			<div className={styles.valueArea}>
				<span className={styles.statsValue}>${data.statsValue}</span>
				<span className={styles.compareValue}>
					<span>{data.compareValue}</span>
					<ArrowUpOutlined />
				</span>
			</div>
		</div>
	);
};
