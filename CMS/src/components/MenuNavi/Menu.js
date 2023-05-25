import React, {useState} from 'react';
import './Menu.css';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {actClick} from '../../redux/action';

export const Menu = () => {
	// get item active from redux
	const itemClick = useSelector((state) => state.interact.activeItem);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [activeItem, setActiveItem] = useState(itemClick);

	const handleClick = (item) => {
		setActiveItem(item);
		// save item active to reducx
		dispatch(actClick(item));
		navigate('/' + item);
	};

	const menu = [
		{title: 'Dashboard', slug: 'dashboard'},
		{title: 'Product', slug: 'products'},
		{title: 'User', slug: 'users'},
		{title: 'Employee', slug: 'employees'},
		{title: 'Revenue', slug: 'revenue'},
		{title: 'Salary', slug: 'Salarys'},
		{title: 'Worksheet', slug: 'worksheet'},
	];
	return (
		<div className="menu">
			<nav>
				<ul>
					{menu.map((item, index) => {
						return (
							<li key={index}>
								<a
									className={activeItem === item.slug ? 'active' : ''}
									onClick={() => handleClick(item.slug)}
								>
									{item.title}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
			<div>
				<img className="menu-icon" src="666201.png" />
			</div>
		</div>
	);
};