import {FETCH_EMPLOYEE_DETAILS, INIT_EMPLOYEE_LIST} from './action';

const initialState = {
	employeeDetail: null,
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
