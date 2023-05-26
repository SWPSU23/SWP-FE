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
	console.log('fetched product list');
	return {
		type: INIT_PRODUCT_LIST,
		payload: ListOfProduct,
	};
};
