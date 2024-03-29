import {server} from '../../share/constant';
import axios from 'axios';
// import {INIT_LEAVE_LIST} from './actionTypes';

export const addLeaveFormAsync = (formData) => {
	console.log('vao redux');
	console.log('vao formData' + JSON.stringify(formData));

	const body = {
		employee_id: Number.parseInt(formData.employeeId),
		start_date_of_leave: formData.startDateOfLeave,
		end_date_of_leave: formData.endDateOfLeave,
		reason_leave: formData.reasonLeave,
	};
	console.log(body);

	return async () => {
		try {
			const response = await axios.post(`${server}/v1/leaveForm`, body);
			return response;
		} catch (error) {
			console.log('error message', error.response.data.message);
			console.log('error message', error.response.data.message.split(':')[1].trim());
			return error;
		}
	};
};
