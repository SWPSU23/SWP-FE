import React, {useState} from 'react';
import './Worksheet.css';
import {Menu} from '../../components/MenuNavi/Menu';
import {CashierWorksheet} from '../../components/CashierWorksheet/CashierWorksheet';
import {GuardWorkshhet} from '../../components/GuardWorksheet/GuardWorkshhet';
import {Header} from '../../components/Header/Header';

export const Worksheet = () => {
	const [isGuard, setIsGuard] = useState(false);
	return (
		<div className="worksheetPage">
			<Menu />
			<Header img="../assets/image/worksheet.jpg" h2="Worksheet" />
			<button onClick={() => setIsGuard(!isGuard)}>Switch</button>
			<div className="worksheetNavigation">worksheetNavigation</div>
			{isGuard ? <GuardWorkshhet /> : <CashierWorksheet />}
		</div>
	);
};
