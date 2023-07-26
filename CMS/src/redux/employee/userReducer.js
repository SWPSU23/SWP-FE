import {ACT_SEARCH_EMPLOYEE, FETCH_EMPLOYEE_DETAILS, INIT_EMPLOYEE_LIST} from './action';

const initialState = {
	employeeDetail: null,
	totalPages: 1,
	employeeList: [],
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		// case 'SET_SEARCH_QUERY':
		// 	return {
		// 		...state,
		// 		searchQuery: action.payload,
		// 	};
		case INIT_EMPLOYEE_LIST:
			console.log('vao day: ', action.payload.info.total_page);

			return {
				...state,
				totalPages: action.payload.info.total_page,
				employeeList: action.payload.employee,
			};
		case ACT_SEARCH_EMPLOYEE:
			return {
				...state,
				employeeList: action.payload,
			};
		case FETCH_EMPLOYEE_DETAILS:
			console.log(action.payload);
			return {
				...state,
				employeeDetail: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
