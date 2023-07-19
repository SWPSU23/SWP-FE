import {ADD_ORDER_DETAIL} from './action';

const initialState = {
	orderDetails: [],
};

const billOrderReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ORDER_DETAIL:
			return {
				...state,
				orderDetails: [...state.orderDetails, action.payload],
			};
		default:
			return state;
	}
};

export default billOrderReducer;
