import axios from 'axios';

export const INIT_EMPLOYEE_LIST = 'INIT_EMPLOYEE_LIST';

export const fetchEmployeeDataSuccess = (data) => {
	return {
		type: INIT_EMPLOYEE_LIST,
		payload: data.data,
	};
};
// ASYNC

export const fetchEmployeeListAsync = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get('http://localhost:8080/v1/employee');
			dispatch(fetchEmployeeDataSuccess(response.data));
		} catch (error) {
			console.log(error);
		}
	};
};
