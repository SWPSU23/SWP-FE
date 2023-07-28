import Swal from 'sweetalert2';

export const confirmPayment = () => {
	return new Promise((resolve, reject) => {
		Swal.fire({
			title: 'Confirm Payment',
			text: "Please review the order details and ensure it's correct",
			icon: 'success',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes',
		})
			.then((result) => {
				if (result.isConfirmed) {
					Swal.fire('Payment Successfully!!', 'Thank you for your purchase.', 'success');
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
export const confirmLeaveForm = () => {
	return new Promise((resolve, reject) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "Please review your leave form and ensure it's correct",
			icon: 'info',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes',
		})
			.then((result) => {
				if (result.isConfirmed) {
					Swal.fire(
						'Send Successfully!!',
						'Your application sent to Manager.',
						'success'
					);
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
export const alertBarCode = () => {
	return new Promise(() => {
		Swal.fire('No Order!!', 'Please enter the barcode.', 'warning');
	});
};

export const alertLeaveForm = (msg) => {
	return new Promise(() => {
		Swal.fire('No Send!!', msg, 'warning');
	});
};
