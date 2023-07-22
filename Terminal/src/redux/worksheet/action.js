import axios from 'axios';
import {server} from '../../share/constant';
import {FETCH_CALENDER_DAY, FETCH_LIST_TO_SELECT} from './actionTypes';

// GET CALENDER DAY
export const fetchCalenderDay = (payload) => {
	return {
		type: FETCH_CALENDER_DAY,
		payload: payload,
	};
};

// GET LIST TO SELECT
export const fetchListToSelect = (payload) => {
	return {
		type: FETCH_LIST_TO_SELECT,
		payload: payload,
	};
};

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

// GET WORKSHEET DATE LIST ASYNC
export const fetchAllWorksheetByDate = (startDate, endDate, employee_id) => {
	return async () => {
		try {
			const response = await axios.get(`${server}/v1/worksheet/employee`, {
				params: {
					start_date: startDate,
					end_date: endDate,
					employee_id: employee_id,
				},
			});
			return response;
		} catch (error) {
			console.log(error);
		}
	};
};

export const addWorksheetAsync = (formData) => {
	console.log('vào redux');
	console.log('vào formData' + JSON.stringify(formData));

	const body = {
		worksheet: {
			employee_id: Number.parseInt(formData.employee_id),
			sheet_id: Number.parseInt(formData.sheet_id),
			date: formData.date,
		},
		role: formData.role,
	};
	console.log(body);

	return async () => {
		try {
			const response = await axios.post(`${server}/v1/worksheet`, body);
			console.log(response);
			return response; // Trả về response từ API nếu cần xử lý tiếp
		} catch (error) {
			console.log('error message', error.response.data.message);
			console.log('error message', error.response.data.message.split(':')[0].trim());
			throw error;
		}
	};
};
