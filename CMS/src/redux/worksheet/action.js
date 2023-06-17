import {ADD_TASK_CASHIER, ADD_TASK_GUARD} from './actionTypes';

export const addTaskGuard = (name, id, workday, sheet) => ({
	type: ADD_TASK_GUARD,
	payload: {name, id, workday, sheet},
});
export const addTaskCashier = (name, id, workday, sheet) => ({
	type: ADD_TASK_CASHIER,
	payload: {name, id, workday, sheet},
});
