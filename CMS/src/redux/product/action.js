import axios from 'axios';
export const CLICKED = 'CLICKED';
export const INIT_PRODUCT_LIST = 'INIT_PRODUCT_LIST';
export const ACT_SEARCH_PRODUCT = 'ACT_SEARCH_PRODUCT';
export const ACT_FETCH_PRODUCT_DETAILS = 'ACT_FETCH_PRODUCT_DETAILS';

import {server} from '../../shared/constant';
const moment = require('moment');

export const actClick = (payload) => {
	return {
		type: CLICKED,
		payload: payload,
	};
};

export const fetchDataSuccess = (data) => {
	return {
		type: INIT_PRODUCT_LIST,
		payload: data.data,
	};
};

export const fetchProductListSearch = (data) => {
	return {
		type: ACT_SEARCH_PRODUCT,
		payload: data,
	};
};

export const fetchProductDetail = (data) => {
	return {
		type: ACT_FETCH_PRODUCT_DETAILS,
		payload: data,
	};
};

// ASYNC

// GET LIST PRODUCT
export const fetchProductListAsync = () => {
	console.log('vao fetchProductListAsync');

	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/product`);
			dispatch(fetchDataSuccess(response.data));
		} catch (error) {
			console.log(error);
		}
	};
};

// GET LIST PRODUCT BY SEARCH
export const fetchProductListSearchAsync = (searchBy, keywords) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/product/search`, {
				params: {
					searchBy: searchBy,
					keywords: keywords,
				},
			});
			// Dispatch action or handle response
			dispatch(fetchProductListSearch(response.data.data));
		} catch (error) {
			console.log(error);
		}
	};
};

// GET A PRODUCT DETAILS
export const fetchProductDetailAsync = (id) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/product/${id}`);
			// Dispatch action or handle response
			dispatch(fetchProductDetail(response.data.data));
		} catch (error) {
			console.log(error);
		}
	};
};

// HANDLE UPLOAD IMAGE

export const handleUploadImageAsync = (img, formDataClient, isUpdate) => {
	console.log(isUpdate);

	const formData = new FormData();
	formData.append('file', img);
	return async (dispatch) => {
		try {
			const response = await axios.post(`${server}/v1/asset/product/images/`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					Accept: '*/*',
				},
			});
			if (isUpdate) {
				console.log('update request');
				dispatch(updateProductDetailAsync(response.data.split(':')[1], formDataClient));
			} else {
				console.log('add request');
				dispatch(addProductDetailAsync(response.data.split(':')[1], formDataClient));
			}
		} catch (error) {
			// Handle error
			console.log(error.response);
			// You can handle the error here and display an appropriate message
		}
	};
};

// HANDLE PREVIEW IMAGE

export const handlePreviewImageAsync = (idImage) => {
	console.log(idImage);

	return async (dispatch) => {
		try {
			const response = await axios.get(
				'http://localhost:8080/v1/asset/product/images/' + idImage
			);
			console.log('vao day');

			return response;
		} catch (error) {
			// Handle error
			console.log(error.response);
			// You can handle the error here and display an appropriate message
		}
	};
};

// ADD A PRODUCT DETAILS
export const addProductDetailAsync = (img, formData) => {
	console.log('formDataClient', formData);
	console.log('img', img);

	const body = {
		image: img,
		name: formData.name,
		unit: formData.unit,
		unit_price: formData.unitPrice,
		stock: formData.stock,
		status: formData.status,
		description: formData.description,
		expired_at: moment(formData.expiredAt).format('YYYY-MM-DD HH:mm:ss'),
	};
	console.log('formData: ' + JSON.stringify(body));

	return async (dispatch) => {
		try {
			const response = await axios.post(`${server}/v1/product`, body);
			dispatch(fetchProductListAsync());
		} catch (error) {
			console.log(error);
		}
	};
};

// UPDATE A PRODUCT DETAILS
export const updateProductDetailAsync = (img, formData) => {
	console.log('formDataClient', formData);
	console.log('img', img);
	const body = {
		image: img,
		id: formData.id,
		name: formData.name,
		unit: formData.unit,
		unit_price: formData.unitPrice,
		stock: formData.stock,
		status: formData.status,
		description: formData.description,
		expired_at: moment(formData.expiredAt).format('YYYY-MM-DD HH:mm:ss'),
	};
	return async (dispatch) => {
		try {
			const response = await axios.put(`${server}/v1/product/${formData.id}`, body);
			dispatch(fetchProductListAsync());
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};
};

// export const setSearchQuery = (query) => ({
// 	type: 'SET_SEARCH_QUERY',
// 	payload: query,
// });
