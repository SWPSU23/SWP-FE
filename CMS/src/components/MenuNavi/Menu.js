import React, {useEffect, useState} from 'react';
import './Menu.css';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {actClick} from '../../redux/product/action';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {data} from '../../shared/listOfNotify';

export const Menu = () => {
	// get item active from redux
	const itemClick = useSelector((state) => state.interact.activeItem);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [activeItem, setActiveItem] = useState(itemClick);
	const [showLoginForm, setShowLoginForm] = useState(false);
	const [showChat, setShowChat] = useState(false);

	const toggleChat = () => {
		setShowChat(!showChat);
	};

	const handleLoginClick = () => {
		setShowLoginForm(!showLoginForm);
	};

	useEffect(() => {
		const handleClickOutside = (e) => {
			const menuIcon = document.querySelector('.menu-icon');
			const loginForm = document.querySelector('.login-form');

			if (
				menuIcon &&
				loginForm &&
				!menuIcon.contains(e.target) &&
				!loginForm.contains(e.target)
			) {
				setShowLoginForm(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	// Get localStorage
	useEffect(() => {
		const savedActiveItem = localStorage.getItem('activeItem');
		if (savedActiveItem) {
			setActiveItem(savedActiveItem);
			dispatch(actClick(savedActiveItem));
		}
	}, [dispatch]);
	const handleClick = (item) => {
		setActiveItem(item);
		// save item active to reducx
		dispatch(actClick(item));
		navigate('/' + item);
		localStorage.setItem('activeItem', item);
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

			<div className="menuForm">
				<div className="bellIcon" onClick={toggleChat}>
					<IoMdNotificationsOutline size={50} />
					{!showChat && <div className="notificationCount">99</div>}
				</div>
				{showChat && (
					<div className="chatBox">
						<div className="arrow"></div>
						<h3>Notification</h3>
						{data.map((notification, index) => (
							<div key={index} className="notify">
								<p>{notification.title}</p>
								<div>{notification.message}</div>
							</div>
						))}
					</div>
				)}
				<img
					className={`menuIcon ${showLoginForm ? 'active' : ''}`}
					src="666201.png"
					onClick={handleLoginClick}
					alt="Menu Icon"
				/>
				<div className={`loginForm ${showLoginForm ? 'show' : ''}`}>
					<Link to="/login">Login</Link>
				</div>
			</div>
		</div>
	);
};
