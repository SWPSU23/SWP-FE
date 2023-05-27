export const CLICKED = 'CLICKED';
import {ListOfProduct} from '../shared/ListOfProduct';
export const INIT_PRODUCT_LIST = 'INIT_PRODUCT_LIST';

export const actClick = (payload) => {
	return {
		type: CLICKED,
		payload: payload,
	};
};

export const fetchProductList = () => {
	return {
		type: INIT_PRODUCT_LIST,
		payload: ListOfProduct,
	};
};
export const setSearchQuery = (query) => ({
	type: 'SET_SEARCH_QUERY',
	payload: query,
});
