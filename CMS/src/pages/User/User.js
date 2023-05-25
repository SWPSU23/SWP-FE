import React, {useState} from 'react';
import './User.css';
import {FormUser} from '../../components/FormUser/FormUser';
import {Menu} from '../../components/MenuNavi/Menu';

export const User = () => {
	const [openForm, setOpenForm] = useState(false);

	// toggle form
	const handleToggleForm = () => {
		setOpenForm(!openForm);
	};

	return (
		<div>
			<Menu />
			{openForm ? <FormUser handleToggleForm={handleToggleForm} /> : <div></div>}
			<button onClick={handleToggleForm}>Form</button>
		</div>
	);
};
