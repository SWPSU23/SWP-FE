import React, {useState} from 'react';
import './Employee.css';
import {FormEmployee} from '../../components/FormEmployee/FormEmployee';
import {Menu} from '../../components/MenuNavi/Menu';

export const Employee = () => {
	const [openForm, setOpenForm] = useState(false);

	// toggle form
	const handleToggleForm = () => {
		setOpenForm(!openForm);
	};

	return (
		<div>
			<Menu />
			{openForm ? <FormEmployee handleToggleForm={handleToggleForm} /> : <div></div>}
			<button onClick={handleToggleForm}>Form</button>
		</div>
	);
};
