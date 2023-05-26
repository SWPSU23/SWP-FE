import {INIT_PRODUCT_LIST} from './action';

const initialState = [
	{
		id: 1,
		image: '../../../assets/image/coca.jpg',
		name: 'Coca',
		unit: 'Can',
		unitPrice: 10,
		stock: 200,
		status: 'Available',
		expiredAt: '15/06/2024',
		description:
			'Nước Giải Khát Có Gas Coca-Cola với lượng gas lớn sẽ giúp bạn xua tan mọi cảm giác mệt mỏi',
	},
];
const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_PRODUCT_LIST:
			console.log('reducer', action.payload);
			return action.payload;
		default:
			return state;
	}
};

export default productReducer;
