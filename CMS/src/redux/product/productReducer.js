import {
	ACT_FETCH_PRODUCT_DETAILS,
	ACT_SEARCH_PRODUCT,
	INIT_PRODUCT_LIST,
	ACT_FETCH_CATEGORY_LIST,
} from './action';

const initialState = {
	productList: [],
	totalPages: 1,
	productDetails: null,
	categoryList: [],
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_PRODUCT_LIST:
			return {
				...state,
				totalPages: action.payload.info.total_page,
				productList: action.payload.product,
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
		case ACT_FETCH_CATEGORY_LIST:
			return {
				...state,
				categoryList: action.payload,
			};

		default:
			return state;
	}
};
export default productReducer;
