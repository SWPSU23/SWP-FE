import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Menu} from '../../components/MenuNavi/Menu';
import './Home.css';

export const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="home">
			Home
			<Menu />
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
