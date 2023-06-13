import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ActionBar.module.css';
import {CaretDownOutlined, SearchOutlined} from '@ant-design/icons';

export const ActionBar = ({img, h2, title, handleToggleForm, handleSearch}) => {
	ActionBar.propTypes = {
		handleSearch: PropTypes.func.isRequired,
		title: PropTypes.string.isRequired,
		handleToggleForm: PropTypes.func.isRequired,
		img: PropTypes.string.isRequired,
		h2: PropTypes.string.isRequired,
	};

	// HANDLE SEACH
	const [searchValue, setSearchValue] = useState('');

	const handleChange = (event) => {
		setSearchValue(event.target.value);
	};

	const handleSubmitSearch = () => {
		handleSearch(searchValue);
	};

	const [isOpenFilterOption, setIsOpenFilterOption] = useState(false);

	const handleAdd = () => {
		handleToggleForm();
	};

	const toogleFilterOption = () => {
		setIsOpenFilterOption(!isOpenFilterOption);
	};

	return (
		<div>
			<div className={styles.actionIcon}>
				<div className={styles.imgIcon}>
					<img src={img} />
				</div>
				<div className={styles.nameIcon}>{h2}</div>
			</div>
			<div className={styles.actionBar}>
				<div className={styles.actionWrapper}>
					<button onClick={handleAdd} className={styles.NewProductBtn}>
						{title}
					</button>
					<div className={styles.filterWrapper} onClick={toogleFilterOption}>
						<span>Filter by</span>
						<CaretDownOutlined />
						{isOpenFilterOption && (
							<div className={styles.filterOptionArea}>
								<p>Filter by name</p>
								<p>Filter by id</p>
							</div>
						)}
					</div>
					<div className={styles.searchWrapper}>
						<input
							className={styles.input}
							type="text"
							placeholder="Search..."
							value={searchValue}
							onChange={handleChange}
						/>
						<button className={styles.searchBtn} onClick={handleSubmitSearch}>
							<SearchOutlined />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
