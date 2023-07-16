import React from 'react';
import Swal from 'sweetalert2';

import 'sweetalert2/src/sweetalert2.scss';

export const successAlert = (text) => {
	Swal.fire('Good job!', text, 'success');
};

export const errorAlert = (text) => {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: text,
		footer: '',
	});
};

export const confirmModal = (confirmButtonText) => {
	return new Promise((resolve, reject) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: confirmButtonText,
		})
			.then((result) => {
				if (result.isConfirmed) {
					Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
					resolve(true); // Resolves the promise with the value true
				} else {
					resolve(false); // Resolves the promise with the value false
				}
			})
			.catch((error) => {
				reject(error); // Rejects the promise with the error, if any
			});
	});
};
