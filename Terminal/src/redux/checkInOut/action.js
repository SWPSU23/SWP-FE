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
			await axios.put(`${server}/v1/checkInOut/checkin`, body).then((response) => {
				const result = JSON.stringify(response);
				console.log('response: actHandleCheckIn ' + JSON.stringify(response));
				return result;
			});
		} catch (error) {
			console.log('error here: ' + error);
			return error;
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
			await axios.put(`${server}/v1/checkInOut/checkOut`, body).then((response) => {
				const result = JSON.stringify(response.response);
				console.log('result: ' + result);
				return result;
			});
		} catch (error) {
			console.log('error here: ' + error);
			return error;
		}
	};
};
