import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import style from './NotificationInMenu.module.css';
import socket from '../../shared/socket';

export const NotificationInMenu = ({data, handleNotifyClick}) => {
	NotificationInMenu.propTypes = {
		data: PropTypes.array.isRequired,
		handleNotifyClick: PropTypes.func.isRequired,
	};
	const [notifications, setNotifications] = useState([]);
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
	}, []);

	return (
		<div className={style.chatBox}>
			<div className={style.arrow}></div>
			<h3>Notification(s)</h3>
			{notifications.map((notification, index) => (
				<div
					key={index}
					className={style.notify}
					onClick={() => handleNotifyClick(notification.type)}
				>
					<p>{notification.title}</p>
					<div>{notification.message}</div>
				</div>
			))}
		</div>
	);
};
