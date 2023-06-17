import React, {useState} from 'react';
import './Worksheet.css';
import {Menu} from '../../components/MenuNavi/Menu';

import {Header} from '../../components/Header/Header';
import HeaderWorksheet from '../../components/HeaderWorksheet/HeaderWorksheet';

export const Worksheet = () => {
	// const [isGuard, setIsGuard] = useState(false);
	// const [openForm, setOpenForm] = useState(false);
	// const handleToggleForm = () => {
	// 	setOpenForm(!openForm);
	// };
	return (
		<div className="worksheetPage">
			<Menu />
			<Header img="../assets/image/worksheet.jpg" h2="Worksheet" />
			<HeaderWorksheet />

			{/* <button onClick={() => setIsGuard(!isGuard)}>Switch</button>
			<div className="worksheetNavigation">worksheetNavigation</div>
			{isGuard ? <GuardWorksheet /> : <CashierWorksheet />} */}
		</div>
	);
};
