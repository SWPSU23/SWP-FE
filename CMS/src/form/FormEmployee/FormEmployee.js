import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import styles from './FormEmployee.module.css';
import {useDispatch} from 'react-redux';
import {updateEmployeeDetailAsync} from '../../redux/employee/action';

export const FormEmployee = ({handleToggleForm, employeeDetail}) => {
	FormEmployee.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
		employeeDetail: PropTypes.array.isRequired,
	};
	console.log(employeeDetail);
	const dispatch = useDispatch();

	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [role, setRole] = useState('');
	const [password, setPassword] = useState('');
	const [age, setAge] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [baseSalary, setBaseSalary] = useState('');

	useEffect(() => {
		if (employeeDetail) {
			setId(employeeDetail.id || '');
			setName(employeeDetail.name || '');
			setRole(employeeDetail.role || '');
			setPassword(employeeDetail.password ? employeeDetail.password.toString() : '');
			setAge(employeeDetail.age ? employeeDetail.age.toString() : '');
			setPhoneNumber(employeeDetail.phone ? employeeDetail.phone.toString() : '');
			setEmail(employeeDetail.email_address || '');
			setBaseSalary(employeeDetail.base_salary || '');
		}
	}, [employeeDetail]);

	// HANDLE SUBMIT FORM
	const handleSubmitForm = () => {
		const formData = {
			id,
			name,
			role,
			password,
			age,
			email,
			phoneNumber,
			baseSalary,
		};
		console.log(formData);
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
		console.log(formData);
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
						<h2 className={styles.labelInput}>Id: </h2>
						<input
							placeholder="id ..."
							value={id}
							onChange={(e) => setId(e.target.value)}
						/>
					</div>
					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Role: </h2>
						<input
							placeholder="role ..."
							value={role}
							onChange={(e) => setRole(e.target.value)}
						/>
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
						<h2 className={styles.labelInput}>Password: </h2>
						<input
							placeholder="password ..."
							value={password}
							onChange={(e) => setPassword(e.target.value)}
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
