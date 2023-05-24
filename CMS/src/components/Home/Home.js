import React from 'react';
import {useNavigate} from 'react-router-dom';

export const Home = () => {
	const navigate = useNavigate();

	return (
		<div>
			Home
			<button
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
			</button>
		</div>
	);
};
