export const INIT_ORDER_LIST = 'INIT_ORDER_LIST';

import axios from 'axios';

export const fetchOrderList = (data) => {
	return {
		type: INIT_ORDER_LIST,
		payload: data.data,
	};
};

// ASYNC

export const fetchOrderListAsync = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get('http://localhost:8080/v1/order');
			dispatch(fetchOrderList(response.data));
		} catch (error) {
			console.log(error);
		}
	};
};
