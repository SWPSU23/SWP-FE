import axios from 'axios';
axios.defaults.withCredentials = true;
export const CLICKED = 'CLICKED';
export const INIT_PRODUCT_LIST = 'INIT_PRODUCT_LIST';
export const ACT_SEARCH_PRODUCT = 'ACT_SEARCH_PRODUCT';
export const ACT_FETCH_PRODUCT_DETAILS = 'ACT_FETCH_PRODUCT_DETAILS';
export const ACT_DELETE_PRODUCT = 'ACT_DELETE_PRODUCT';
export const ACT_FETCH_CATEGORY_LIST = 'ACT_FETCH_CATEGORY_LIST';

import {server} from '../../shared/constant';
const moment = require('moment');

export const actClick = (payload) => {
	return {
		type: CLICKED,
		payload: payload,
	};
};

export const fetchDataSuccess = (data) => {
	console.log('fetchProductList', data);
	return {
		type: INIT_PRODUCT_LIST,
		payload: data.data,
	};
};

export const fetchCategoryList = (data) => {
	console.log('fetchCategoryList', data);
	return {
		type: ACT_FETCH_CATEGORY_LIST,
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

export const deleteProduct = (data) => {
	return {
		type: ACT_FETCH_PRODUCT_DETAILS,
		payload: data,
	};
};

// ASYNC

// GET LIST PRODUCT
export const fetchProductListAsync = (pageIndex) => {
	console.log('vao fetchProductListAsync page', pageIndex);

	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/product?page_index=${pageIndex}`);
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

// GET CATEGORY LIST
export const fetchCategoryListAsync = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/category`);
			dispatch(fetchCategoryList(response.data));
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

// DELETE A PRODUCT
export const deleteProductAsync = async (id) => {
	console.log('delete product', id);
	console.log(`${server}/v1/product/${id}`);
	console.log('call delete');
	try {
		const response = await axios.delete(`${server}/v1/product/${id}`);
		console.log('response', response);
	} catch (error) {
		console.log(error);
	}
};

// HANDLE UPLOAD IMAGE

export const handleUploadImageAsync = (img, formDataClient, isUpdate, isUploadImg) => {
	console.log(isUpdate);
	const formData = new FormData();
	formData.append('file', img);
	return async () => {
		try {
			let response = '';
			if (isUploadImg) {
				response = await axios.post(`${server}/v1/asset/product/images/`, formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
						Accept: '*/*',
					},
				});
			} else {
				response = img;
			}
			if (isUpdate) {
				console.log('update request', response.data);
				if (isUploadImg) {
					return updateProductDetailAsync(response.data.split(':')[1], formDataClient);
				} else {
					return updateProductDetailAsync(response, formDataClient);
				}
			} else {
				console.log('add request', response);
				return addProductDetailAsync(response.data.split(':')[1], formDataClient);
			}
		} catch (error) {
			console.log(error);
			throw error;
		}
	};
};

// HANDLE PREVIEW IMAGE

export const handlePreviewImageAsync = (idImage) => {
	console.log(idImage);

	return async (dispatch) => {
		const response = await axios.get(
			'http://localhost:8080/v1/asset/product/images/' + idImage
		);
		console.log('vao day');

		return response;
	};
};

// ADD A PRODUCT DETAILS
export const addProductDetailAsync = async (img, formData) => {
	console.log('formDataClient', formData);
	console.log('img', img);

	const body = {
		image: img,
		name: formData.name,
		unit: formData.unit,
		cost_price: formData.costPrice,
		retail_price: formData.retailPrice,
		category: formData.category,
		stock: formData.stock,
		description: formData.description,
		expired_at: moment(formData.expiredAt).format('YYYY-MM-DD'),
	};
	console.log('formData: ' + JSON.stringify(body));

	try {
		const response = await axios.post(`${server}/v1/product`, body);
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

// UPDATE A PRODUCT DETAILS
export const updateProductDetailAsync = async (img, formData) => {
	console.log('formDataClient', formData);
	console.log(formData.id);
	console.log('img', img);
	const body = {
		image: img,
		name: formData.name,
		unit: formData.unit,
		cost_price: formData.costPrice,
		retail_price: formData.retailPrice,
		category: formData.category,
		stock: formData.stock,
		status: formData.status,
		description: formData.description,
		expired_at: moment(formData.expiredAt).format('YYYY-MM-DD'),
	};
	console.log('body', body);
	// 	const response = await axios.put(`${server}/v1/product/${formData.id}`, body);
	// 	dispatch(fetchProductListAsync(1));
	// 	console.log(response);
	try {
		const response = await axios
			.put(`${server}/v1/product/${formData.id}`, body)
			.then((response) => {
				fetchProductListAsync(1);
			});
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

// export const setSearchQuery = (query) => ({
// 	type: 'SET_SEARCH_QUERY',
// 	payload: query,
// });

// HANDLE LOGOUT
export const actLogOut = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${server}/v1/auth/logout`);
			return response;
		} catch (error) {
			console.log(error);
		}
	};
};

//  GET USER INFO
export const actGetUserInfo = async () => {
	try {
		const response = await axios.get(`${server}/v1/auth/getUserInfo`);
		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
