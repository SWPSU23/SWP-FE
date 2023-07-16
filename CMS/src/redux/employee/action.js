import axios from 'axios';
axios.defaults.withCredentials = true;
import {server} from '../../shared/constant';

export const INIT_EMPLOYEE_LIST = 'INIT_EMPLOYEE_LIST';
export const FETCH_EMPLOYEE_DETAILS = 'FETCH_EMPLOYEE_DETAILS';
export const ACT_SEARCH_EMPLOYEE = 'ACT_SEARCH_EMPLOYEE';

export const fetchEmployeeDataSuccess = (data) => {
	return {
		type: INIT_EMPLOYEE_LIST,
		payload: data.data,
	};
};

export const fetchEmployeeListSearch = (data) => {
	return {
		type: ACT_SEARCH_EMPLOYEE,
		payload: data,
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

// GET LIST SEARCH BY SEARCH
export const fetchSearchListSearchAsync = (searchBy, keywords) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/employee/search`, {
				params: {
					searchBy: searchBy,
					keywords: keywords,
				},
			});
			// Dispatch action or handle response
			dispatch(fetchEmployeeListSearch(response.data.data));
		} catch (error) {
			console.log(error);
		}
	};
};

// GET A EMPLOYEE DETAILS
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

// DELETE AN EMPLOYEE
export const deleteEmployeeAsync = async (id) => {
	console.log('delete employee', id);
	console.log(`${server}/v1/employee/${id}`);
	console.log('call delete');
	try {
		const response = await axios.delete(`${server}/v1/employee/${id}`);
		console.log('response', response);
	} catch (error) {
		console.log(error);
	}
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

export const addEmployeeDetailAsync = (formData) => {
	const body = {
		name: formData.name,
		age: formData.age,
		email_address: formData.email,
		phone: formData.phoneNumber,
		password: formData.password,
		role: formData.role,
		base_salary: formData.baseSalary,
	};
	return async (dispatch) => {
		try {
			const response = await axios.post(`${server}/v1/employee`, body);
			dispatch(fetchEmployeeListAsync());
			return response;
		} catch (error) {
			console.log(error);
			throw error;
		}
	};
};

// HANDLE UPDATE
export const updateEmployeeDetailAsync = (formData) => {
	const body = {
		name: formData.name,
		age: formData.age,
		email_address: formData.email,
		phone: formData.phoneNumber,
		password: formData.password,
		role: formData.role,
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
