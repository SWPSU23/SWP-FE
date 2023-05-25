export const CLICKED = 'CLICKED';

export const actClick = (payload) => {
	return {
		type: CLICKED,
		payload: payload,
	};
};
