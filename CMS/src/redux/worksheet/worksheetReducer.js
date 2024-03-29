import {
	ADD_TASK_CASHIER,
	ADD_TASK_GUARD,
	FETCH_CALENDER_DAY,
	FETCH_LIST_TO_SELECT,
	FETCH_WORKSHEET_BY_ID,
	RECORD_CHANGE,
} from './actionTypes';

const initialState = {
	change: false,
	guards: {},
	cashier: {},
	listDayToRender: [],
	calenderDay: [],
	worksheetDetails: 0,
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

		// WORKSHEET
		case RECORD_CHANGE: {
			return {
				...state,
				change: action.payload,
			};
		}

		case FETCH_LIST_TO_SELECT: {
			return {
				...state,
				listDayToRender: action.payload,
			};
		}

		case FETCH_CALENDER_DAY: {
			return {
				...state,
				calenderDay: action.payload,
			};
		}

		case FETCH_WORKSHEET_BY_ID: {
			console.log('vao day');
			return {
				...state,
				worksheetDetails: action.payload,
			};
		}

		default:
			return state;
	}
};

export default worksheetReducer;
