import axios from 'axios';
import {server} from '../../shared/constant';
axios.defaults.withCredentials = true;
export const MANAGER_INFO = 'MANAGER_INFO';

//ACTION CREATOR
export const setManagerInfor = (info) => {
	return {
		type: MANAGER_INFO,
		payload: info,
	};
};

//CALL API ASYNC
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
