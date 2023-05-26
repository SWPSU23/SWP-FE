import {combineReducers} from 'redux';
import interactReducer from './interactReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
	interact: interactReducer,
	product: productReducer,
	// Add more reducers if needed
});

export default rootReducer;
