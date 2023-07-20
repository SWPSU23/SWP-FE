import {combineReducers} from 'redux';
import billOrderReducer from '../billOrder/billOrderReducer'; // Import the new reducer
import {leaveReducer} from '../leave/leaveReducer';
import authenReducer from '../authen/authenReducer';

const rootReducer = combineReducers({
	// Add other reducers here if needed
	billOrder: billOrderReducer,
	leave: leaveReducer,
	authen: authenReducer,
});

export default rootReducer;
