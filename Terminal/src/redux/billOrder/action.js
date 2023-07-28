import axios from 'axios';
axios.defaults.withCredentials = true;
import {server} from '../../share/constant';

export const ADD_ORDER_DETAIL = 'ADD_ORDER_DETAIL';
export const DELETE_PRODUCT_IN_ORDER = 'DELETE_PRODUCT_IN_ORDER';

export const UPDATE_SELECTED_PAYMENT_METHOD = 'UPDATE_SELECTED_PAYMENT_METHOD';
export const CLEAR_PRODUCT_IN_ORDER = 'CLEAR_PRODUCT_IN_ORDER';
export const ADD_BARCODE = 'ADD_BARCODE';

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

export const updateSelectedPaymentMethod = (method) => {
	return {
		type: UPDATE_SELECTED_PAYMENT_METHOD,
		payload: method,
	};
};
export const clearProductInOrder = (payload) => {
	return {
		type: CLEAR_PRODUCT_IN_ORDER,
		payload: payload,
	};
};
export const addBarcode = (barcode) => ({
	type: ADD_BARCODE,
	payload: barcode,
});
// HANDLE CALL API ASYNC

export const addOrderDetailAsync = (id) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/product/${id}`);
			dispatch(addOrderDetail(response.data.data));
			return response;
		} catch (error) {
			return JSON.stringify(error);
		}
	};
};

// HANDLE CREATE ORDER ASYNC

export const actCreateOrder = (idEmployee, orderList) => {
	console.log('actCreateOrder', idEmployee + ' ' + orderList);
	const body = {
		products: orderList,
		employee_id: idEmployee,
	};
	console.log('body: ' + JSON.stringify(body));

	return async (dispatch) => {
		try {
			const response = await axios.post(`${server}/v1/order`, body);
			console.log(response);
			return response;
		} catch (error) {
			console.log(error);
		}
	};
};
