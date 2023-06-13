export const CLICKED = 'CLICKED';
export const INIT_PRODUCT_LIST = 'INIT_PRODUCT_LIST';
export const ACT_SEARCH_PRODUCT = 'ACT_SEARCH_PRODUCT';
export const ACT_FETCH_PRODUCT_DETAILS = 'ACT_FETCH_PRODUCT_DETAILS';

import axios from 'axios';

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

export const fetchProductListAsync = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get('http://localhost:8080/v1/product');
			dispatch(fetchDataSuccess(response.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchProductListSearchAsync = (searchBy, keywords) => {
	return async (dispatch) => {
		try {
			const response = await axios.get('http://localhost:8080/v1/product/search', {
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

export const fetchProductDetailAsync = (id) => {
	return async (dispatch) => {
		try {
			const response = await axios.get('http://localhost:8080/v1/product/' + id);
			// Dispatch action or handle response
			dispatch(fetchProductDetail(response.data.data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const setSearchQuery = (query) => ({
	type: 'SET_SEARCH_QUERY',
	payload: query,
});
