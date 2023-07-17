import React from 'react';
import './HeaderLeft.css';
import logo from '../../assets/logo.png';

export const HeaderLeft = () => {
	return (
		<div className="headerLeft">
			<div className="headerLeftImg">
				<img src={logo} />
			</div>
		</div>
	);
};
