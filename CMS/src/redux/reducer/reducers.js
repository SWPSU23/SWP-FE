import {combineReducers} from 'redux';
import interactReducer from './interactReducer';

const rootReducer = combineReducers({
	interact: interactReducer,
	// Add more reducers if needed
});

export default rootReducer;
