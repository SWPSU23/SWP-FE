import {ADD_TASK_CASHIER, ADD_TASK_GUARD} from './actionTypes';

const initialState = {
	guards: {},
	cashier: {},
};

const worksheetReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK_GUARD: {
			const {name, id, workday, sheet} = action.payload;
			return {
				...state,
				guards: {
					...state.guards,
					[workday]: {
						...state.guards[workday],
						[sheet]: {
							...state.guards[workday]?.[sheet],
							[id]: name,
						},
					},
				},
			};
		}
		case ADD_TASK_CASHIER: {
			const {name, id, workday, sheet} = action.payload;
			return {
				...state,
				cashier: {
					...state.cashier,
					[workday]: {
						...state.cashier[workday],
						[sheet]: {
							...state.cashier[workday]?.[sheet],
							[id]: name,
						},
					},
				},
			};
		}

		default:
			return state;
	}
};

export default worksheetReducer;
