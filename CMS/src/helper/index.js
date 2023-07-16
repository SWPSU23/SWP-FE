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

export function generatePassword(length) {
	const numbers = '0123456789';
	const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const similarCharacters = 'il1Lo0O';

	let password = '';

	const characters = uppercaseLetters + numbers;

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		let character = characters.charAt(randomIndex);

		// Exclude similar characters
		if (similarCharacters.includes(character)) {
			character = characters.charAt((randomIndex + 1) % characters.length);
		}

		password += character;
	}

	return password;
}
