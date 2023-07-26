import axios from 'axios';
import {server} from '../../shared/constant';
import {INIT_LEAVE_LIST} from './actionTypes';

export const fetchDataSuccess = (data) => {
	console.log('fetchLeaveList', data);
	return {
		type: INIT_LEAVE_LIST,
		payload: data,
	};
};

// GET LIST LEAVE
export const fetchLeaveListAsync = (pageIndex) => {
	console.log('vao fetchLeaveListAsync page', pageIndex);

	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/leaveForm?page_index=${pageIndex}`);
			dispatch(fetchDataSuccess(response.data));
		} catch (error) {
			console.log(error);
		}
	};
};

// Response leave form
export const actResponseLeaveFormAsync = (idForm, status, comment) => {
	console.log('vao actResponseLeaveFormAsync', status + ' ' + comment);
	const body = {
		status: status,
		manager_replied: comment,
	};

	return async (dispatch) => {
		try {
			const response = await axios.put(`${server}/v1/leaveForm/${idForm}`, body);
			return response;
		} catch (error) {
			console.log(error);
		}
	};
};
