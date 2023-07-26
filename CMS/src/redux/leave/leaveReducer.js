import {INIT_LEAVE_LIST} from './actionTypes';
import {ACT_FETCH_LEAVE_DETAILS} from './actionTypes';
const initialState = {
	leaveFormList: [],
	// totalPages: 1,
};

const leaveReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_LEAVE_LIST:
			return {
				...state,
				leaveFormList: action.payload.data,
			};
		default:
			return state;
	}
};

export default leaveReducer;
