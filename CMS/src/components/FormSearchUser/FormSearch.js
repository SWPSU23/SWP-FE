import React from 'react';
import {CaretDownOutlined, SearchOutlined} from '@ant-design/icons';
const FormSearch = () => {
	return (
		<div className="actionBar">
			<div className="actionWrapper">
				<button className="NewProductBtn">New User</button>
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

export default FormSearch;
