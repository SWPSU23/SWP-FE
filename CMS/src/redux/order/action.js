export const INIT_ORDER_LIST = 'INIT_ORDER_LIST';
export const ACT_FETCH_ORDER_DETAILS = 'ACT_FETCH_ORDER_DETAILS';

import axios from 'axios';
import {server} from '../../shared/constant';

//ACTION CREATORS

export const fetchOrderList = (data) => {
	return {
		type: INIT_ORDER_LIST,
		payload: data.data,
	};
};

export const fetchOrderDetail = (data) => {
	console.log(data);
	return {
		type: ACT_FETCH_ORDER_DETAILS,
		payload: data,
	};
};

// ASYNC

//GET ORDER LIST
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

// GET A ORDER DETAILS
export const fetchOrderDetailAsync = (id) => {
	return async (dispatch) => {
		try {
			console.log(id);
			const response = await axios.get(`${server}/v1/orderProduct?order_id=${id}`);
			// Dispatch action or handle response
			dispatch(fetchOrderDetail(response.data.data));
		} catch (error) {
			console.log(error);
		}
	};
};
