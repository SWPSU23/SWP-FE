import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './HeaderRight.css';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';
import {data} from '../../share/listOfNotify';
import {useDispatch, useSelector} from 'react-redux';
import {actLogOut} from '../../redux/authen/action';
import {loginPage} from '../../share/constant';
import socket from '../../share/socket';

export const HeaderRight = () => {
	const [showChat, setShowChat] = useState(false);
	const navigate = useNavigate();
	const [isCashierSet, setIsCashierSet] = useState(true);
	const [notifications, setNotifications] = useState([]);
	const [unreadNotiNumber, setUnReadNotiNumber] = useState(0);

	useEffect(() => {
		socket.emit('notification:fetch', {
			employee_id: 1,
		});
		socket.on('notification:fetch', (data) => {
			console.log(data);
			console.log('data', data.data);
			let newArr = data.data.map((notification) => {
				return {
					type: 'PaySlip',
					message: notification.content,
					...notification,
				};
			});
			console.log(newArr);
			setNotifications(newArr);
		});

		//HANDLE GET UNREAD NOTIFICATION NUMBER
		socket.emit('notification:countUnread', {
			employee_id: 1,
		});

		socket.on('notification:countUnread', (data) => {
			console.log('data', data.data);
			setUnReadNotiNumber(data.data);
		});
	}, []);

	const handleLogout = () => {
		// setIsCashierSet(!isCashierSet);
		// console.log(isCashierSet);

		// dispatch(setCashierRoleForProject(isCashierSet));
		//  REDIRECT URL

		dispatch(actLogOut()).then((response) => {
			window.location.href = loginPage;
		});
	};

	const toggleChat = () => {
		socket.emit('notification:markAllAsRead', {
			employee_id: 1,
		});
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
					{!showChat && (
						<div
							className="notificationCount"
							style={{display: unreadNotiNumber != 0 ? 'flex' : 'none'}}
						>
							{unreadNotiNumber != 0 ? unreadNotiNumber : 0}
						</div>
					)}
				</div>
			) : (
				<div></div>
			)}

			{showChat && (
				<div className="chatBox">
					<div className="arrow"></div>
					<h3>Notification</h3>
					{notifications.map((notification, index) => (
						<div
							key={index}
							className="notify"
							onClick={() => {
								handleNotifyClick(notification.type);
							}}
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
