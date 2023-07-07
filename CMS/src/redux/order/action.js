export const INIT_ORDER_LIST = 'INIT_ORDER_LIST';

import axios from 'axios';
import {server} from '../../shared/constant';

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
			const response = await axios.get(`${server}/v1/order?page_index=1`);
			dispatch(fetchOrderList(response.data));
		} catch (error) {
			console.log(error);
		}
	};
};
