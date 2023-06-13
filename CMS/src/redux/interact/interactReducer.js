import {CLICKED} from '../product/action';

const initialState = {
	activeItem: '',
};

const interactReducer = (state = initialState, action) => {
	switch (action.type) {
		case CLICKED:
			return {
				...state,
				activeItem: action.payload,
			};
		default:
			return state;
	}
};

export default interactReducer;
