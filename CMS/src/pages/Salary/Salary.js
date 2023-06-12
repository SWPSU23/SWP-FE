import React from 'react';
import './Salary.css';
import {Menu} from '../../components/MenuNavi/Menu';
import PayRollTable from '../../components/PayRollTable/PayRollTable';

export const Salary = () => {
	return (
		<div>
			<Menu />
			<PayRollTable />
		</div>
	);
};
