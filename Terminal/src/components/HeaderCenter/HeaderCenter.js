import React from 'react';
import './HeaderCenter.css';
import {useSelector} from 'react-redux';

export const HeaderCenter = () => {
	const userInfo = useSelector((state) => state.authen.cashierInfor);
	console.log('userInfo: ' + userInfo.id);

	return (
		<div className="headerCenter">
			<h1 className="employeeInfo">Name: {userInfo.name}</h1>
			<h1 className="employeeInfo">Status: {userInfo.status}</h1>
		</div>
	);
};
