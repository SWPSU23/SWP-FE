import {INIT_ORDER_LIST, ACT_FETCH_ORDER_DETAILS} from './action';

const initialState = {
	orderList: [],
	orderDetails: null,
};

const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_ORDER_LIST:
			return {
				...state,
				orderList: action.payload,
			};
		case ACT_FETCH_ORDER_DETAILS:
			return {
				...state,
				orderDetails: action.payload,
			};
		default:
			return state;
	}
};

export default orderReducer;
