import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import styles from './FormEmployee.module.css';
import {useDispatch} from 'react-redux';
import {addEmployeeDetailAsync, updateEmployeeDetailAsync} from '../../redux/employee/action';
import {generatePassword} from '../../helper';
// var generator = require('generate-password');

export const FormEmployee = ({handleToggleForm, employeeDetail}) => {
	FormEmployee.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
		employeeDetail: PropTypes.array.isRequired,
	};
	const dispatch = useDispatch();

	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [role, setRole] = useState('manager');
	const [password, setPassword] = useState(generatePassword(10));
	const [age, setAge] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [baseSalary, setBaseSalary] = useState('');
	const [status, setStatus] = useState('');

	useEffect(() => {
		if (employeeDetail) {
			setId(employeeDetail.id || '');
			setName(employeeDetail.name || '');
			setRole(employeeDetail.role || 'manager');
			// setPassword(employeeDetail.password ? employeeDetail.password.toString() : '');
			setAge(employeeDetail.age ? employeeDetail.age.toString() : '');
			setPhoneNumber(employeeDetail.phone ? employeeDetail.phone.toString() : '');
			setEmail(employeeDetail.email_address || '');
			setBaseSalary(employeeDetail.base_salary || '');
		}
	}, [employeeDetail]);

	// HANDLE SUBMIT FORM
	const handleSubmitForm = () => {
		setPassword(generatePassword(10));
		console.log(password);

		const formData = {
			name,
			role,
			password,
			age,
			email,
			phoneNumber,
			baseSalary,
		};
		console.log(formData);
		dispatch(addEmployeeDetailAsync(formData));

		// Clear the form fields after submit
		setId('');
		setName('');
		setRole('manager');
		setPassword('');
		setAge('');
		setPhoneNumber('');
		setEmail('');
		setBaseSalary('');

		handleToggleForm();
	};
	const handleSubmitUpdateForm = () => {
		const formData = {
			id: employeeDetail.id,
			name,
			role,
			password,
			age,
			email,
			phoneNumber,
			baseSalary,
		};
		console.log('formData' + formData);
		dispatch(updateEmployeeDetailAsync(formData));

		// Clear the form fields after submit
		setId('');
		setName('');
		setRole('');
		setPassword('');
		setAge('');
		setPhoneNumber('');
		setEmail('');
		setBaseSalary('');
		handleToggleForm();
	};

	return (
		<div className={styles.formEmployee}>
			<div className={styles.formContainer}>
				<h1>Employee details</h1>
				<div className={styles.formContainerCenter}>
					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Role: </h2>

						<select
							name="status"
							id="status"
							className={styles.statusDropdown}
							value={role}
							onChange={(e) => setRole(e.target.value)}
						>
							<option className={styles.statusDropdownOption} value="manager">
								Manager
							</option>
							<option className={styles.statusDropdownOption} value="cashier">
								Cashier
							</option>
							<option className={styles.statusDropdownOption} value="guard">
								Guard
							</option>
						</select>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Name: </h2>
						<input
							placeholder="name ..."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Age: </h2>
						<input
							placeholder="age ..."
							value={age}
							onChange={(e) => setAge(e.target.value)}
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Email: </h2>
						<input
							placeholder="email ..."
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Phone number: </h2>
						<input
							placeholder="phone number ..."
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Base salary: </h2>
						<input
							placeholder="Base salary ..."
							value={baseSalary}
							onChange={(e) => setBaseSalary(e.target.value)}
						/>
					</div>
				</div>

				<div className={styles.formContainerButton}>
					<button
						onClick={handleToggleForm}
						className={`${styles['btn']} ${styles.btnClose}`}
					>
						Close
					</button>

					{employeeDetail ? (
						<button
							onClick={handleSubmitUpdateForm}
							className={`${styles['btn']} ${styles.btnSave}`}
						>
							Update
						</button>
					) : (
						<button
							onClick={handleSubmitForm}
							className={`${styles['btn']} ${styles.btnSave}`}
						>
							Save
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
