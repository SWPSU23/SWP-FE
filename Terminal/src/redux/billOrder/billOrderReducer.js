import {ADD_ORDER_DETAIL, DELETE_PRODUCT_IN_ORDER, UPDATE_SELECTED_PAYMENT_METHOD} from './action';

const initialState = {
	orderDetails: [],
	selectedPaymentMethod: null,
};

let newItem = {};
let itemExist = {};
let newOrderDetails = [];
let indexItemExist = 0;

const billOrderReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ORDER_DETAIL:
			newItem = {
				id: action.payload.id,
				name: action.payload.name,
				price: action.payload.cost_price,
				quantity: 1,
				total: action.payload.cost_price,
			};

			itemExist = [...state.orderDetails].find((product) => product.id === action.payload.id);
			newOrderDetails = [...state.orderDetails];

			if (itemExist) {
				indexItemExist = [...state.orderDetails].findIndex(
					(product) => product.id === action.payload.id
				);
				newOrderDetails[indexItemExist] = {
					id: newOrderDetails[indexItemExist].id,
					name: newOrderDetails[indexItemExist].name,
					price: newOrderDetails[indexItemExist].price,
					quantity: newOrderDetails[indexItemExist].quantity + 1,
					total:
						newOrderDetails[indexItemExist].total +
						newOrderDetails[indexItemExist].price,
				};
			} else {
				newOrderDetails = [...state.orderDetails, newItem];
			}

			return {
				...state,
				orderDetails: [...newOrderDetails],
			};
		case DELETE_PRODUCT_IN_ORDER:
			newOrderDetails = [...state.orderDetails];
			[...state.orderDetails].forEach((product, index) => {
				if (product.id === action.payload) {
					newOrderDetails.splice(index, 1);
				}
			});
			return {
				...state,
				orderDetails: [...newOrderDetails],
			};
		case UPDATE_SELECTED_PAYMENT_METHOD:
			return {
				...state,
				selectedPaymentMethod: action.payload,
			};

		default:
			return state;
	}
};

export default billOrderReducer;
