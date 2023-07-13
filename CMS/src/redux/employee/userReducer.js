import {FETCH_EMPLOYEE_DETAILS, INIT_EMPLOYEE_LIST} from './action';

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
			return {
				...state,
				totalPages: action.payload.info.total_page,
				employeeList: action.payload.employee,
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
