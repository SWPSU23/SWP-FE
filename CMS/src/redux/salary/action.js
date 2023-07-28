import axios from 'axios';
import {server} from '../../shared/constant';
axios.defaults.withCredentials = true;

export const ACT_FETCH_PAYROLL = 'ACT_FETCH_PAYROLL';

//ASYNC

//GET PAYROLL
// export const fetchPayrollAsync = () => {
// 	return async (dispatch) => {
// 		try {
// 			const response = await axios.get(`${server}/v1/product?page_index=${pageIndex}`);
// 			dispatch(fetchDataSuccess(response.data));
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// };

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
