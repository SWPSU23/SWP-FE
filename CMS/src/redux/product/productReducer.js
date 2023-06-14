import {ACT_FETCH_PRODUCT_DETAILS, ACT_SEARCH_PRODUCT, INIT_PRODUCT_LIST} from './action';

const initialState = {
	productList: [],
	productDetails: null,
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_PRODUCT_LIST:
			return {
				...state,
				productList: action.payload,
			};

		case ACT_SEARCH_PRODUCT:
			return {
				...state,
				productList: action.payload,
			};
		case ACT_FETCH_PRODUCT_DETAILS:
			return {
				...state,
				productDetails: action.payload,
			};

		default:
			return state;
	}
};
export default productReducer;
