export const CLICKED = 'CLICKED';
// import {ListOfProduct} from '../shared/ListOfProduct';
export const INIT_PRODUCT_LIST = 'INIT_PRODUCT_LIST';
import axios from 'axios';

export const actClick = (payload) => {
	return {
		type: CLICKED,
		payload: payload,
	};
};

// export const fetchProductList = () => {
// 	return {
// 		type: INIT_PRODUCT_LIST,
// 		payload: ListOfProduct,
// 	};
// };

export const fetchDataSuccess = (data) => {
	return {
		type: INIT_PRODUCT_LIST,
		payload: data.data,
	};
};

export const fetchProductList = () => {
	return (dispatch) => {
		axios
			.get('http://localhost:8080/v1/product/getListProduct')
			.then((response) => {
				dispatch(fetchDataSuccess(response.data));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const setSearchQuery = (query) => ({
	type: 'SET_SEARCH_QUERY',
	payload: query,
});
