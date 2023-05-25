import React, {useState} from 'react';
import './Menu.css';
import {useNavigate} from 'react-router-dom';

export const Menu = () => {
	const navigate = useNavigate();
	const [isClicked, setIsClicked] = useState(false);
	const [activeItem, setActiveItem] = useState('');

	const handleClick = (item) => {
		setActiveItem(item);
		setIsClicked(!isClicked);
		navigate('/users');
		console.log(isClicked);
	};
	return (
		<div className="menu">
			<nav>
				<ul>
					<li>
						<a
							href="Dashboard"
							className={activeItem === 'Dashboard' ? 'active' : ''}
							onClick={() => handleClick('Dashboard')}
						>
							Dashboard
						</a>
					</li>
					<li>
						<a
							href="Product"
							className={activeItem === 'Product' ? 'active' : ''}
							onClick={() => handleClick('Product')}
						>
							Product
						</a>
					</li>
					<li>
						<a
							href="<User/>"
							className={activeItem === 'User' ? 'active' : ''}
							onClick={() => handleClick('User')}
						>
							User
						</a>
					</li>
					<li>
						<a
							href="Sale"
							className={activeItem === 'Sale' ? 'active' : ''}
							onClick={() => handleClick('Sale')}
						>
							Sale
						</a>
					</li>
					<li>
						<a
							href="Revenue"
							className={activeItem === 'Revenue' ? 'active' : ''}
							onClick={() => handleClick('Revenue')}
						>
							Revenue
						</a>
					</li>
					<li>
						<a
							href="Salary"
							className={activeItem === 'Salary' ? 'active' : ''}
							onClick={() => handleClick('Salary')}
						>
							Salary
						</a>
					</li>
					<li>
						<a
							href="Worksheet"
							className={activeItem === 'Worksheet' ? 'active' : ''}
							onClick={() => handleClick('Worksheet')}
						>
							Worksheet
						</a>
					</li>
				</ul>
			</nav>
			<div>
				<img className="menu-icon" src="666201.png" />
			</div>
		</div>
	);
};
