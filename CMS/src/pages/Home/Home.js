import React from 'react';
import {useNavigate} from 'react-router-dom';
import {FormProduct} from '../../components/FormProduct/FormProduct';
import './Home.css';

export const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="home">
			Home
			<FormProduct />
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
