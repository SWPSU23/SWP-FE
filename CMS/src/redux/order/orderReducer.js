import {INIT_ORDER_LIST} from './action';

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
		default:
			return state;
	}
};

export default orderReducer;
