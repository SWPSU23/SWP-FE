import React, {useState} from 'react';
import styles from './Container.module.css';
import {ContainerLeft} from '../ContainerLeft/ContainerLeft';
import {ContainerRight} from '../ContainerRight/ContainerRight';
import {FormCheckIn} from '../../form/FormCheckIn/FormCheckIn';
import {FormWorksheet} from '../../form/FormWorksheet/FormWorksheet';
import {FormSalary} from '../../form/FormSalary/FormSalary';
import {FormLeave} from '../../form/FormLeave/FormLeave';

export const Container = () => {
	const [activeForm, setActiveForm] = useState(null);

	const handleToggleForm = (form) => {
		setActiveForm(form);
	};

	return (
		<div className={styles.container}>
			<ContainerLeft />
			<ContainerRight handleToggleForm={handleToggleForm} />
			{activeForm === '/checkin' && <FormCheckIn />}
			{activeForm === '/worksheet' && <FormWorksheet />}
			{activeForm === '/leave' && <FormLeave />}
			{activeForm === '/salary' && <FormSalary />}
		</div>
	);
};
