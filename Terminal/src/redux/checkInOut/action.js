import axios from 'axios';
axios.defaults.withCredentials = true;

import {server} from '../../share/constant';

export const ACT_CHECK_IN = 'ACT_CHECK_IN';
export const ACT_CHECK_OUT = 'ACT_CHECK_OUT';
// HANDLE CHECK-IN
export const actHandleCheckIn = (id) => {
	console.log('actHandleCheckIn', id);
	const body = {
		employee_id: id,
	};
	return async (dispatch) => {
		try {
			const response = await axios.put(`${server}/v1/checkInOut/checkin`, body);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};
};

export const actHandleCheckOut = (id) => {
	console.log('actHandleCheckOut', id);
	const body = {
		employee_id: id,
	};
	return async (dispatch) => {
		try {
			const response = await axios.put(`${server}/v1/checkInOut/checkout`, body);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};
};
