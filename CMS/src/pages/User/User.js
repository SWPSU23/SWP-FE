import React, {useState} from 'react';
import './User.css';
import {Menu} from '../../components/MenuNavi/Menu';
import {ActionBar} from '../../components/ActionBar/ActionBar';

export const User = () => {
	const [openForm, setOpenForm] = useState(false);

	// toggle form
	const handleToggleForm = () => {
		setOpenForm(!openForm);
	};
	return (
		<div>
			<Menu />
			<ActionBar title="New user" handleToggleForm={handleToggleForm} />
		</div>
	);
};
