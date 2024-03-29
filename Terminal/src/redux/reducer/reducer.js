import {combineReducers} from 'redux';
import billOrderReducer from '../billOrder/billOrderReducer'; // Import the new reducer
import {leaveReducer} from '../leave/leaveReducer';
import authenReducer from '../authen/authenReducer';
import worksheetReducer from '../worksheet/worksheetReducer';
import checkInOutReducer from '../checkInOut/checkInOutReducer';
import salaryReducer from '../salary/salaryReducer';

const rootReducer = combineReducers({
	// Add other reducers here if needed
	billOrder: billOrderReducer,
	leave: leaveReducer,
	authen: authenReducer,
	worksheet: worksheetReducer,
	salary: salaryReducer,
});

export default rootReducer;
