import React from 'react';
import './ActionBar.css';
import {CaretDownOutlined, SearchOutlined} from '@ant-design/icons';

export const ActionBar = () => {
	return (
		<div className="actionBar">
			<div className="actionWrapper">
				<button className="NewProductBtn">New product</button>
				<div className="filterWrapper">
					<span>Filter by</span>
					<CaretDownOutlined />
				</div>
				<div className="searchWrapper">
					<input type="text" placeholder="Search..." />
					<button className="searchBtn">
						<SearchOutlined />
					</button>
				</div>
			</div>
		</div>
	);
};
