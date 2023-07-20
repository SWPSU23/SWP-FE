export const SET_ROLE = 'SET_ROLE';

export const setCashierRoleForProject = (role) => {
	return {
		type: SET_ROLE,
		payload: role,
	};
};
