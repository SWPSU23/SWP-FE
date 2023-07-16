export const INIT_ORDER_LIST = 'INIT_ORDER_LIST';
export const ACT_FETCH_ORDER_DETAILS = 'ACT_FETCH_ORDER_DETAILS';

import axios from 'axios';
axios.defaults.withCredentials = true;

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
export const fetchOrderListAsync = (pageIndex) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/order?page_index=${pageIndex}`);
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
// DELETE AN ORDER
export const deleteOrderAsync = async (id) => {
	try {
		const response = await axios.delete(`${server}/v1/order/${id}`);
		console.log('response', response);
	} catch (error) {
		console.log(error);
	}
};
