import {combineReducers} from 'redux';
import interactReducer from '../interact/interactReducer';
import productReducer from '../product/productReducer';
import orderReducer from '../order/orderReducer';
import userReducer from '../employee/userReducer';
import worksheetReducer from '../worksheet/worksheetReducer';
import leaveReducer from '../leave/leaveReducer';
import salaryReducer from '../salary/salaryReducer';
import authenReducer from '../authen/authenReducer';

const rootReducer = combineReducers({
	interact: interactReducer,
	product: productReducer,
	order: orderReducer,
	user: userReducer,
	worksheet: worksheetReducer,
	leave: leaveReducer,
	salary: salaryReducer,
	authen: authenReducer,
	// Add more reducers if needed
});

export default rootReducer;
