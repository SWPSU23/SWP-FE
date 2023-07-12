import React from 'react';
import './HeaderRight.css';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';

export const HeaderRight = () => {
	return (
		<div className="headerRight">
			<div className="bellIcon">
				{' '}
				<IoMdNotificationsOutline size={50} />
			</div>
			<div className="logout">
				<ButtonSmall title="Logout" />
			</div>
		</div>
	);
};
