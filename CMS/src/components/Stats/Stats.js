import React from 'react';
import PropTypes from 'prop-types';
import {ArrowUpOutlined} from '@ant-design/icons';
import './Stats.css';

export const Stats = (props) => {
	Stats.propTypes = {
		data: PropTypes.object.isRequired,
	};
	const data = props.data;
	console.log(data);
	return (
		<div className="stats">
			<p className="statsTitle">{data.statsTitle}</p>
			<div className="valueArea">
				<span className="statsValue">${data.statsValue}</span>
				<span className="compareValue">
					<span>{data.compareValue}</span>
					<ArrowUpOutlined />
				</span>
			</div>
		</div>
	);
};
