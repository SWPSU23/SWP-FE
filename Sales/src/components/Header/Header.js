import React from 'react';
import styles from './Header.module.css';
import {HeaderLeft} from '../HeaderLeft/HeaderLeft';
import {HeaderCenter} from '../HeaderCenter/HeaderCenter';
import {HeaderRight} from '../HeaderRight/HeaderRight';

export const Header = () => {
	return (
		<div className={styles.header}>
			<HeaderLeft />
			<HeaderCenter />
			<HeaderRight />
		</div>
	);
};
