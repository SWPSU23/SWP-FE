import {FETCH_LIST_TO_SELECT_MONTH, FETCH_SALARY_SUCCESS} from './action';

const initialState = {
	listMonthToRender: [],
	paySlip: [],
};

const salaryReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_LIST_TO_SELECT_MONTH: {
			return {
				...state,
				listMonthToRender: action.payload,
			};
		}
		case FETCH_SALARY_SUCCESS:
			console.log('fetch sucess: ', action.payload);
			return {
				...state,
				paySlip: action.payload,
			};

		default:
			return state;
	}
};

export default salaryReducer;
