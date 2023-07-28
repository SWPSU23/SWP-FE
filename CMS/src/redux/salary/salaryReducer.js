import {ACT_FETCH_PAYROLL} from './action';

const initialState = {
	payRoll: [],
	paySlip: null,
};

const salaryReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACT_FETCH_PAYROLL:
			return {
				...state,
			};
		default:
			return state;
	}
};

export default salaryReducer;
