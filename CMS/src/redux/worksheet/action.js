import {
	ADD_TASK_CASHIER,
	ADD_TASK_GUARD,
	FETCH_CALENDER_DAY,
	FETCH_LIST_TO_SELECT,
	FETCH_WORKSHEET_BY_ID,
	RECORD_CHANGE,
} from './actionTypes';

export const addTaskGuard = (name, id, workday, sheet) => ({
	type: ADD_TASK_GUARD,
	payload: {name, id, workday, sheet},
});
export const addTaskCashier = (name, id, workday, sheet) => ({
	type: ADD_TASK_CASHIER,
	payload: {name, id, workday, sheet},
});

export const actChange = (payload) => ({
	type: RECORD_CHANGE,
	payload: payload,
});

// WORKSHEET
import axios from 'axios';
axios.defaults.withCredentials = true;

import {server} from '../../shared/constant';

// GET LIST TO SELECT
export const fetchListToSelect = (payload) => {
	return {
		type: FETCH_LIST_TO_SELECT,
		payload: payload,
	};
};

// GET CALENDER DAY
export const fetchCalenderDay = (payload) => {
	return {
		type: FETCH_CALENDER_DAY,
		payload: payload,
	};
};

export const fetchWorksheetByID = (payload) => {
	return {
		type: FETCH_WORKSHEET_BY_ID,
		payload: payload,
	};
};

// ASYNC

// GET LIST TO SELECT ASYNC
export const fetchListToSelectAsync = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/calendar/day-of-week`);
			dispatch(fetchListToSelect(response.data.data));
		} catch (error) {
			console.log(error);
		}
	};
};

// GET CALENDER DAY ASYNC
export const fetchCalenderDayAsync = (start, end) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/calendar`, {
				params: {
					start_day: start,
					end_day: end,
				},
			});

			dispatch(fetchCalenderDay(response.data.data));
		} catch (error) {
			console.log(error);
		}
	};
};

// GET LIST NAME BY ROLE ASYNC
export const fetchListNameByRoleAsync = (role) => {
	return async (dispatch) => {
		try {
			return await axios.get(`${server}/v1/employee/search`, {
				params: {
					searchBy: 'role',
					keywords: role,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};
};

// GET LIST NAME BY ROLE ASYNC
export const createNewWorksheetAsync = (formdata, role) => {
	const {name, worksheet, sheet} = formdata;

	console.log('formdata: ' + JSON.stringify(formdata));

	const body = {
		worksheet: {
			employee_id: Number.parseInt(name),
			sheet_id: Number.parseInt(sheet),
			date: worksheet,
		},
		role: role,
	};

	console.log(body);

	return async (dispatch) => {
		try {
			const response = await axios.post(`${server}/v1/worksheet`, body);
			return response;
		} catch (error) {
			console.log(error);
			throw error;
		}
	};
};

// GET LIST NAME BY ROLE ASYNC
export const featchAllWorksheetByDate = (startDate, endDate, role) => {
	return async (dispatch) => {
		try {
			return await axios.get(`${server}/v1/worksheet`, {
				params: {
					start_date: startDate,
					end_date: endDate,
					role: role,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};
};

// GET WORKSHEET BY ID
export const fetchWorksheetByIDAsync = (id) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/worksheet/${id}`);
			dispatch(fetchWorksheetByID(response.data.data));
			return response;
		} catch (error) {
			console.log(error);
		}
	};
};

// DELETE WORKSHEET BY ID
export const deleteWorksheetByIDAsync = (id) => {
	return async (dispatch) => {
		try {
			const response = await axios.delete(`${server}/v1/worksheet/${id}`);

			return response;
		} catch (error) {
			console.log(error);
		}
	};
};

// UPDATE WORKSHEET BY ID
export const updateWorksheetByIDAsync = (id, name) => {
	const body = {
		employee_id: name,
	};
	return async (dispatch) => {
		try {
			const response = await axios.put(`${server}/v1/worksheet/${id}`, body);

			return response;
		} catch (error) {
			console.log(error);
		}
	};
};
