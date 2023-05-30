import React from 'react';
import PropTypes from 'prop-types';
import styles from './ActionBar.module.css';
import {CaretDownOutlined, SearchOutlined} from '@ant-design/icons';

export const ActionBar = ({title, handleToggleForm}) => {
	ActionBar.propTypes = {
		title: PropTypes.func.isRequired,
		handleToggleForm: PropTypes.func.isRequired,
	};

	const handleAdd = () => {
		handleToggleForm();
	};
	return (
		<div className={styles.actionBar}>
			<div className={styles.actionWrapper}>
				<button onClick={handleAdd} className={styles.NewProductBtn}>
					{title}
				</button>
				<div className={styles.filterWrapper}>
					<span>Filter by</span>
					<CaretDownOutlined />
				</div>
				<div className={styles.searchWrapper}>
					<input className={styles.input} type="text" placeholder="Search..." />
					<button className={styles.searchBtn}>
						<SearchOutlined />
					</button>
				</div>
			</div>
		</div>
	);
};
