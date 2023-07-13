import React, {useState} from 'react';
import styles from './Container.module.css';
import {ContainerLeft} from '../ContainerLeft/ContainerLeft';
import {ContainerRight} from '../ContainerRight/ContainerRight';
import {FormCheckIn} from '../../form/FormCheckIn/FormCheckIn';
import {FormWorksheet} from '../../form/FormWorksheet/FormWorksheet';
import {FormLeave} from '../../form/FormLeave/FormLeave';

export const Container = () => {
	const [toggleForm, setToggleForm] = useState(false);
	const handleToggleForm = () => {
		setToggleForm(!toggleForm);
	};
	return (
		<div className={styles.container}>
			<ContainerLeft />
			<ContainerRight handleToggleForm={handleToggleForm} />
			{toggleForm ? <FormLeave handleToggleForm={handleToggleForm} /> : <div></div>}
		</div>
	);
};
