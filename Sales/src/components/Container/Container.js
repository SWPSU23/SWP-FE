import React from 'react';
import styles from './Container.module.css';
import {ContainerLeft} from '../ContainerLeft/ContainerLeft';
import {ContainerRight} from '../ContainerRight/ContainerRight';

export const Container = () => {
	return (
		<div className={styles.container}>
			<ContainerLeft />
			<ContainerRight />
		</div>
	);
};
