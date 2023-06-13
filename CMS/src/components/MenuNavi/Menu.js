import React, {useState} from 'react';
import './Menu.css';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {actClick} from '../../redux/product/action';

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
		{title: 'Dashboard', slug: ''},
		{title: 'Product', slug: 'products'},
		{title: 'Order', slug: 'orders'},
		{title: 'Employee', slug: 'employees'},
		{title: 'Revenue', slug: 'revenue'},
		{title: 'Salary', slug: 'salary'},
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
