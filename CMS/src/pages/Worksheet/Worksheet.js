import React, {useState} from 'react';
import './Worksheet.css';
import {Menu} from '../../components/MenuNavi/Menu';
import {CashierWorksheet} from '../../components/CashierWorksheet/CashierWorksheet';
import {GuardWorkshhet} from '../../components/GuardWorksheet/GuardWorkshhet';

export const Worksheet = () => {
	const [isGuard, setIsGuard] = useState(false);
	return (
		<div className="worksheetPage">
			<Menu />
			<button onClick={() => setIsGuard(!isGuard)}>Switch</button>
			<div className="worksheetNavigation">worksheetNavigation</div>
			{isGuard ? <GuardWorkshhet /> : <CashierWorksheet />}
		</div>
	);
};
