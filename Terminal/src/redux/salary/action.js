import axios from 'axios';
import {server} from '../../share/constant';
export const FETCH_LIST_TO_SELECT_MONTH = 'FETCH_LIST_TO_SELECT_MONTH';
export const FETCH_SALARY_SUCCESS = 'FETCH_SALARY_SUCCESS';

// GET LIST TO SELECT MONTH
export const fetchListToSelectMonth = (payload) => {
	return {
		type: FETCH_LIST_TO_SELECT_MONTH,
		payload: payload,
	};
};
// GET PAYSLIP SUCCESS
const fetchSalarySuccess = (payload) => ({
	type: FETCH_SALARY_SUCCESS,
	payload: payload,
});
// GET LIST TO SELECT MONTH ASYNC
export const fetchListToSelectMonthAsync = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/calendar/month-of-year`);
			dispatch(fetchListToSelectMonth(response.data.data));
			console.log(response.data.data);
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchSalary = (employeeId, monthYear) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				`${server}/v1/salary/paySlip/${employeeId}?month_year=${monthYear}`
			);
			dispatch(fetchSalarySuccess(response.data.data));
			// console.log('salary: ', response.data.data);
			return response;
		} catch (error) {
			console.log(error);
		}
	};
};
