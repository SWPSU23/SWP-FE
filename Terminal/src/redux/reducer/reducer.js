import {combineReducers} from 'redux';
import billOrderReducer from '../billOrder/billOrderReducer'; // Import the new reducer

const rootReducer = combineReducers({
	// Add other reducers here if needed
	billOrder: billOrderReducer, // Add the new reducer to the root reducer
});

export default rootReducer;
