import React from 'react';
import PropTypes from 'prop-types';
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
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
				<span className={styles.statsValue}>
					{String(data.statsValue).replace(/(.)(?=(\d{3})+$)/g, '$1,')}
					{data.statsTitle.includes('REVENUE') ? 'đ' : ''}
				</span>
				<span
					className={styles.compareValue}
					style={{color: data.compareValue.includes('+') ? 'green' : 'red'}}
				>
					<span>{data.compareValue}</span>
					{data.compareValue.includes('+') ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
				</span>
			</div>
		</div>
	);
};
