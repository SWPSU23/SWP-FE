import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {FormProduct} from '../../components/FormProduct/FormProduct';
import Menu from '../../components/menu/Menu';
import './Home.css';
import Menu from '../../components/menu/Menu';

export const Home = () => {
	const navigate = useNavigate();
	const [openForm, setOpenForm] = useState(false);

	// toggle form
	const handleToggleForm = () => {
		setOpenForm(!openForm);
	};

	return (
		<div className="home">
			Home
			<Menu />
			{openForm ? <FormProduct handleToggleForm={handleToggleForm} /> : <div></div>}
			<button onClick={handleToggleForm}>Form</button>
			{/* <button
				onClick={() => {
					navigate('/products');
				}}
			>
				Products
			</button>
			<button
				onClick={() => {
					navigate('/users');
				}}
			>
				Users
			</button> */}
		</div>
	);
};
