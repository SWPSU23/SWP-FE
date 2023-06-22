import {INIT_EMPLOYEE_LIST} from './action';

const initialState = {
	searchQuery: '',
	employeeList: [],
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SEARCH_QUERY':
			return {
				...state,
				searchQuery: action.payload,
			};
		case INIT_EMPLOYEE_LIST:
			return {
				...state,
				employeeList: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
