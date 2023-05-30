import React from 'react';
import {CaretDownOutlined, SearchOutlined} from '@ant-design/icons';
import styles from './FormSearch.module.css';

const FormSearch = () => {
	return (
		<div className={styles.actionBar}>
			<div className={styles.actionWrapper}>
				<button className={styles.NewProductBtn}>New product</button>
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

export default FormSearch;
