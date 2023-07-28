import {MANAGER_INFO} from './action';
const initialState = {
	managerInfor: null,
};

const authenReducer = (state = initialState, action) => {
	switch (action.type) {
		case MANAGER_INFO:
			console.log('vao MANAGER_INFO: ', action.payload);

			return {
				...state,
				managerInfor: action.payload,
			};
		default:
			return state;
	}
};

export default authenReducer;
