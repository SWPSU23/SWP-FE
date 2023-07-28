import axios from 'axios';
import {server} from '../../shared/constant';
axios.defaults.withCredentials = true;

export const ACT_FETCH_PAYROLL = 'ACT_FETCH_PAYROLL';
export const ACT_FETCH_MONTH_LIST = 'ACT_FETCH_MONTH_LIST';

//ACTION CREATOR
export const fetchMonthList = (payload) => {
	return {
		type: ACT_FETCH_MONTH_LIST,
		payload: payload,
	};
};

export const fetchPayroll = (payload) => {
	return {
		type: ACT_FETCH_PAYROLL,
		payload: payload,
	};
};

//ASYNC

//GET MONTH
export const fetchMonthListAsync = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/calendar/month-of-year`);
			dispatch(fetchMonthList(response.data.data));
			console.log(response.data.data);
		} catch (error) {
			console.log(error);
		}
	};
};

// GET PAYSLIP DETAILS
export const fetchPayslipDetailsAsync = (id, monthOfYear) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				`${server}/v1/salary/paySlipDetails/${id}?month_year=${monthOfYear}`
			);
			// dispatch(fetchDataSuccess(response.data));
			return response;
		} catch (error) {
			console.log(error);
		}
	};
};

// GET PAYROLL DETAILS
export const fetchPayrollAsync = (month) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/salary/payRoll?month_year=${month}`);
			dispatch(fetchPayroll(response.data.data));
			console.log('pay roll', response.data.data);
		} catch (error) {
			console.log(error);
		}
	};
};
