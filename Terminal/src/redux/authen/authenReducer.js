import {SET_ROLE} from './action';

const initialState = {
	isCashier: true,
};

const authenReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ROLE:
			return {
				...state,
				isCashier: action.payload,
			};
		default:
			return state;
	}
};

export default authenReducer;
