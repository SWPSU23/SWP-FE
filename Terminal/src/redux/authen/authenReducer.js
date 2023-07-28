import {CASHIER_INFO, SET_ROLE} from './action';

const initialState = {
	isCashier: true,
	cashierInfor: [],
};

const authenReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ROLE:
			return {
				...state,
				isCashier: action.payload,
			};
		case CASHIER_INFO:
			console.log('vao CASHIER_INFO: ', action.payload);

			return {
				...state,
				cashierInfor: action.payload,
			};
		default:
			return state;
	}
};

export default authenReducer;
