const moment = require('moment');
export function formatDate(dateString) {
	const date = new Date(dateString.split(' ')[0]);
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	// Pad single digits with leading zero
	const formattedDay = String(day).padStart(2, '0');
	const formattedMonth = String(month).padStart(2, '0');

	return `${formattedDay}/${formattedMonth}/${year}`;
}

export function convertDateFormat(dateString, originalTime) {
	const date = moment(dateString, 'DD/MM/YYYY');
	const time = moment(originalTime, 'HH:mm:ss');
	const convertedDate = date.format('YYYY-MM-DD') + 'T' + time.format('HH:mm:ss.SSS') + 'Z';
	return convertedDate;
}

export function convertDateInputFormat(dateString) {
	const date = new Date(dateString.split(' ')[0]);
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	// Pad single digits with leading zero
	const formattedDay = String(day).padStart(2, '0');
	const formattedMonth = String(month).padStart(2, '0');

	return `${year}-${formattedMonth}-${formattedDay}`;
}

export const convertAndSaveImage = (base64Data, fileName) => {
	const link = document.createElement('a');
	link.href = base64Data;
	link.download = fileName;
	link.click();
};

// TEST
const day = [
	{date: '2023-07-10', day_of_week: 'Monday', isSpecialDay: 'no'},
	{date: '2023-07-11', day_of_week: 'Tuesday', isSpecialDay: 'no'},
	{date: '2023-07-12', day_of_week: 'Wednesday', isSpecialDay: 'no'},
	{date: '2023-07-13', day_of_week: 'Thursday', isSpecialDay: 'no'},
	{date: '2023-07-14', day_of_week: 'Friday', isSpecialDay: 'no'},
	{date: '2023-07-15', day_of_week: 'Saturday', isSpecialDay: 'no'},
	{date: '2023-07-16', day_of_week: 'Sunday', isSpecialDay: 'no'},
];

const worksheet = [
	{id: 25, employee_id: 9, employee_name: 'phạm đăng ninh', sheet_id: 1, date: '2023-07-10'},
	{id: 14, employee_id: 9, employee_name: 'phạm đăng ninh', sheet_id: 2, date: '2023-07-11'},
	{id: 18, employee_id: 10, employee_name: 'phạm đăng ninh', sheet_id: 1, date: '2023-07-12'},
	{id: 24, employee_id: 12, employee_name: 'huynh chi bao', sheet_id: 1, date: '2023-07-13'},
	{id: 17, employee_id: 9, employee_name: 'phạm đăng ninh', sheet_id: 1, date: '2023-07-13'},
	{id: 26, employee_id: 9, employee_name: 'phạm đăng ninh', sheet_id: 1, date: '2023-07-14'},
	{id: 27, employee_id: 12, employee_name: 'huynh chi bao', sheet_id: 1, date: '2023-07-15'},
	{id: 28, employee_id: 14, employee_name: 'Bá phước', sheet_id: 2, date: '2023-07-16'},
];

export const combinedArray = day.map((dayItem) => {
	const matchedWorksheet = worksheet.filter((item) => item.date === dayItem.date);
	return {
		date: dayItem.date,
		day_of_week: dayItem.day_of_week,
		isSpecialDay: dayItem.isSpecialDay,
		listemployee: matchedWorksheet.map((item) => ({
			id: item.employee_id,
			name: item.employee_name,
		})),
	};
});
