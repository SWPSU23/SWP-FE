import axios from 'axios';
axios.defaults.withCredentials = true;
import {server} from '../../shared/constant';

export const INIT_EMPLOYEE_LIST = 'INIT_EMPLOYEE_LIST';
export const FETCH_EMPLOYEE_DETAILS = 'FETCH_EMPLOYEE_DETAILS';

export const fetchEmployeeDataSuccess = (data) => {
	return {
		type: INIT_EMPLOYEE_LIST,
		payload: data.data,
	};
};
export const fetchEmployeeDetail = (data) => {
	return {
		type: FETCH_EMPLOYEE_DETAILS,
		payload: data.data,
	};
};
// ASYNC

export const fetchEmployeeListAsync = (pageIndex) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/employee?page_index=${pageIndex}`);
			dispatch(fetchEmployeeDataSuccess(response.data));
		} catch (error) {
			console.log(error);
		}
	};
};

// GET A PRODUCT DETAILS
export const fetchEmployeeDetailAsync = (id) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/employee/${id}`);
			// Dispatch action or handle response
			dispatch(fetchEmployeeDetail(response.data));
		} catch (error) {
			console.log(error);
		}
	};
};

// HANDLE ADD OR UPDATE FORM
// export const handleFormEmployee = (formDataClient, isUpdate) => {
// 	console.log(isUpdate);

// 	return async (dispatch) => {
// 		try {
// 			let response;

// 			if (isUpdate) {
// 				console.log('update request');
// 				dispatch(updateEmployeeDetailAsync(response.data.split(':')[1], formDataClient));
// 			} else {
// 				console.log('add request');
// 				dispatch(addEmployeeDetailAsync(response.data.split(':')[1], formDataClient));
// 			}

// 			console.log(response);
// 		} catch (error) {
// 			// Handle error
// 			console.log(error);
// 			// You can handle the error here and display an appropriate message
// 		}
// 	};
// };

// export const addEmployeeDetailAsync = (formData) => {
// 	const body = {
// 		id: formData.id,
// 		name: formData.name,
// 		role: formData.role,
// 		password: formData.password,
// 		email: formData.email,
// 		phoneNumber: formData.phoneNumber,
// 		age: formData.age,
// 		baseSalary: formData.baseSalary,
// 	};
// 	return async (dispatch) => {
// 		try {
// 			const response = await axios.put(`${server}/v1/employee`, body);
// 			dispatch(fetchEmployeeListAsync());
// 			return response;
// 		} catch (error) {
// 			console.log(error);
// 			throw error;
// 		}
// 	};
// };

// HANDLE UPDATE
export const updateEmployeeDetailAsync = (formData) => {
	const body = {
		id: formData.id,
		name: formData.name,
		role: formData.role,
		password: formData.password,
		email_address: formData.email,
		phone: formData.phoneNumber,
		age: formData.age,
		base_salary: formData.baseSalary,
	};
	return async (dispatch) => {
		try {
			const response = await axios.put(`${server}/v1/employee/${formData.id}`, body);
			dispatch(fetchEmployeeListAsync());
			return response;
		} catch (error) {
			console.log(error);
			throw error;
		}
	};
};
