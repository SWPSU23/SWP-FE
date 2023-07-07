import {combineReducers} from 'redux';
import interactReducer from '../interact/interactReducer';
import productReducer from '../product/productReducer';
import orderReducer from '../order/orderReducer';
import userReducer from '../employee/userReducer';
import worksheetReducer from '../worksheet/worksheetReducer';

const rootReducer = combineReducers({
	interact: interactReducer,
	product: productReducer,
	order: orderReducer,
	user: userReducer,
	worksheet: worksheetReducer,
	// Add more reducers if needed
});

export default rootReducer;
