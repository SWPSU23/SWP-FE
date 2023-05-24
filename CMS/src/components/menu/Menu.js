import React, {useState} from 'react';
import './Menu.css';

const Menu = () => {
	const [isClicked, setIsClicked] = useState(false);
	const handleClick = () => {
		setIsClicked(!isClicked);
		console.log(isClicked);
	};
	return (
		<div className="menu">
			<div className="menu-container">
				<div id="btn" className="menu-item" onClick={handleClick}>
					Dashboard
				</div>
				<div id="btn" className="menu-item" onClick={handleClick}>
					Product
				</div>
				<div id="btn" className="menu-item" onClick={handleClick}>
					Sale
				</div>
				<div id="btn" className="menu-item" onClick={handleClick}>
					User
				</div>
				<div id="btn" className="menu-item" onClick={handleClick}>
					Revenue
				</div>
				<div id="btn" className="menu-item" onClick={handleClick}>
					Salary
				</div>
				<div id="btn" className="menu-item" onClick={handleClick}>
					Worksheet
				</div>
			</div>
			<div>
				<img className="menu-icon" src="666201.png"></img>
			</div>
			<div className="menu-footer"></div>
		</div>
	);
};

export default Menu;
