import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './HeaderRight.css';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import {data} from '../../share/listOfNotify';
import {useDispatch, useSelector} from 'react-redux';
import {setCashierRoleForProject} from '../../redux/authen/action';

export const HeaderRight = () => {
	const [showChat, setShowChat] = useState(false);
	const navigate = useNavigate();
	const [isCashierSet, setIsCashierSet] = useState(true);

	const handleLogout = () => {
		setIsCashierSet(!isCashierSet);
		console.log(isCashierSet);

		dispatch(setCashierRoleForProject(isCashierSet));
	};

	const toggleChat = () => {
		setShowChat(!showChat);
	};
	const handleNotifyClick = (item) => {
		// Redirect to respective pages
		if (item === 'Leave') {
			navigate('/leave');
		} else if (item === 'Salary') {
			navigate('/salary');
		} else if (item === 'Check in') {
			navigate('/checkin');
		}
	};

	const isCashier = useSelector((state) => state.authen.isCashier);

	const dispatch = useDispatch();
	return (
		<div className="headerRight">
			{isCashier ? (
				<div className="bellIcon" onClick={toggleChat}>
					<IoMdNotificationsOutline size={50} />
					{!showChat && <div className="notificationCount">99</div>}
				</div>
			) : (
				<div></div>
			)}

			{showChat && (
				<div className="chatBox">
					<div className="arrow"></div>
					<h3>Notification</h3>
					{data.map((notification, index) => (
						<div
							key={index}
							className="notify"
							onClick={() => handleNotifyClick(notification.title)}
						>
							<p>{notification.title}</p>
							<div>{notification.message}</div>
						</div>
					))}
				</div>
			)}
			<div className="logout" onClick={handleLogout}>
				<ButtonSmall title="Logout" />
			</div>
		</div>
	);
};
