import axios from 'axios';
import {server} from '../../share/constant';
axios.defaults.withCredentials = true;
export const SET_ROLE = 'SET_ROLE';
export const CASHIER_INFO = 'CASHIER_INFO';

export const setCashierRoleForProject = (role) => {
	return {
		type: SET_ROLE,
		payload: role,
	};
};

export const setCashierInfor = (info) => {
	return {
		type: CASHIER_INFO,
		payload: info,
	};
};

// HANDLE LOGOUT
export const actLogOut = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/auth/logout`);
			return response;
		} catch (error) {
			console.log(error);
		}
	};
};

//  GET USER INFO
export const actGetUserInfo = async () => {
	try {
		const response = await axios.get(`${server}/v1/auth/getUserInfo`);
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
