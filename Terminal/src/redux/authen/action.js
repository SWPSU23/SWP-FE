import axios from 'axios';
import {server} from '../../share/constant';
axios.defaults.withCredentials = true;
export const SET_ROLE = 'SET_ROLE';

export const setCashierRoleForProject = (role) => {
	return {
		type: SET_ROLE,
		payload: role,
	};
};

// HANDLE LOGOUT
export const actLogOut = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/auth/getUserInfo`);
			return response;
		} catch (error) {
			console.log(error);
		}
	};
};
