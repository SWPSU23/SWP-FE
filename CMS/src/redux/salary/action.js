import axios from 'axios';
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
