import {ACT_FETCH_MONTH_LIST, ACT_FETCH_PAYROLL} from './action';

const initialState = {
	payRoll: null,
	paySlip: null,
	monthList: null,
};

const salaryReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACT_FETCH_PAYROLL:
			return {
				...state,
				payRoll: action.payload,
			};
		case ACT_FETCH_MONTH_LIST:
			return {
				...state,
				monthList: action.payload,
			};
		default:
			return state;
	}
};

export default salaryReducer;
