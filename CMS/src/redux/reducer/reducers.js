import {combineReducers} from 'redux';
import interactReducer from './interactReducer';
import productReducer from './productReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
	interact: interactReducer,
	product: productReducer,
	user: userReducer,
	// Add more reducers if needed
});

export default rootReducer;
