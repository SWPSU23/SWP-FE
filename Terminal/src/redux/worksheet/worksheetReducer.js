import {FETCH_CALENDER_DAY, FETCH_LIST_TO_SELECT} from './actionTypes';

const initialState = {
	calenderDay: [],
	listDayToRender: [],
};

const worksheetReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CALENDER_DAY: {
			return {
				...state,
				calenderDay: action.payload,
			};
		}
		case FETCH_LIST_TO_SELECT: {
			return {
				...state,
				listDayToRender: action.payload,
			};
		}
		default:
			return state;
	}
};

export default worksheetReducer;
