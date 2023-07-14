import React, {useEffect, useState} from 'react';
import styles from './Container.module.css';
import {ContainerLeft} from '../ContainerLeft/ContainerLeft';
import {ContainerRight} from '../ContainerRight/ContainerRight';
import {FormCheckIn} from '../../form/FormCheckIn/FormCheckIn';
import {FormWorksheet} from '../../form/FormWorksheet/FormWorksheet';
import {FormLeave} from '../../form/FormLeave/FormLeave';
import {FormSalary} from '../../form/FormSalary/FormSalary';

export const Container = () => {
	// const formSalary = <FormSalary handleToggleForm={handleToggleForm} />;
	// const formCheckIn = <FormCheckIn handleToggleForm={handleToggleForm} />;
	// const formWorksheet = <FormWorksheet handleToggleForm={handleToggleForm} />;
	// const formLeave = <FormLeave handleToggleForm={handleToggleForm} />;
	const [toggleForm, setToggleForm] = useState(false);
	const [form, setForm] = useState('');
	const [type, setType] = useState('checkin');
	const handleToggleForm = (type) => {
		console.log('handleToogleForm', type);
		setType(type);
		setToggleForm(!toggleForm);
	};
	useEffect(() => {
		if (toggleForm === true) {
			switch (type) {
				case 'salary':
					setForm(<FormSalary handleToggleForm={handleToggleForm} />);
					console.log('set salary');
					break;

				case 'checkin':
					setForm(<FormCheckIn handleToggleForm={handleToggleForm} />);
					console.log('set checkin');
					break;

				case 'worksheet':
					setForm(<FormWorksheet handleToggleForm={handleToggleForm} />);
					console.log('set worksheet');
					break;

				case 'leaveform':
					setForm(<FormLeave handleToggleForm={handleToggleForm} />);
					console.log('set leaveform');
					break;

				default:
					break;
			}
		}
	}, [type]);
	return (
		<div className={styles.container}>
			<ContainerLeft />
			<ContainerRight handleToggleForm={handleToggleForm} />
			{toggleForm ? form : <div></div>}
		</div>
	);
};
