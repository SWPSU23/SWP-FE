import {INIT_ORDER_LIST, ACT_FETCH_ORDER_DETAILS} from './action';

const initialState = {
	orderList: [],
	totalPages: 1,
	orderDetails: null,
};

const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_ORDER_LIST:
			return {
				...state,
				totalPages: action.payload.info.total_page,
				orderList: action.payload.order,
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
