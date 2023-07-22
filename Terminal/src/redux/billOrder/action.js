import axios from 'axios';
axios.defaults.withCredentials = true;
import {server} from '../../share/constant';

export const ADD_ORDER_DETAIL = 'ADD_ORDER_DETAIL';
export const DELETE_PRODUCT_IN_ORDER = 'DELETE_PRODUCT_IN_ORDER';

//ACTION CREATORS

export const addOrderDetail = (orderDetail) => {
	return {
		type: ADD_ORDER_DETAIL,
		payload: orderDetail,
	};
};

export const deleteProductInOrder = (productId) => {
	return {
		type: DELETE_PRODUCT_IN_ORDER,
		payload: productId,
	};
};

// HANDLE CALL API ASYNC

export const addOrderDetailAsync = (id) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/product/${id}`);
			console.log('addOrderDetailAsync', id);
			console.log(response);
			dispatch(addOrderDetail(response.data.data));
		} catch (error) {
			console.log(error);
		}
	};
};
