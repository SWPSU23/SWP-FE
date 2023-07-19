export const ADD_ORDER_DETAIL = 'ADD_ORDER_DETAIL';

export const addOrderDetail = (orderDetail) => {
	return {
		type: ADD_ORDER_DETAIL,
		payload: orderDetail,
	};
};
