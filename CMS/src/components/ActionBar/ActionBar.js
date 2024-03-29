import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ActionBar.module.css';
import {CaretDownOutlined, SearchOutlined} from '@ant-design/icons';

export const ActionBar = ({title, handleToggleForm, handleSearch}) => {
	ActionBar.propTypes = {
		handleSearch: PropTypes.func.isRequired,
		title: PropTypes.string.isRequired,
		handleToggleForm: PropTypes.func.isRequired,
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
			<div className={styles.actionBar}>
				<div className={styles.actionWrapper}>
					<button
						style={{display: title.includes('New order') ? 'none' : 'block'}}
						onClick={handleAdd}
						className={styles.NewProductBtn}
					>
						{title}
					</button>
					{/* <div className={styles.filterWrapper} onClick={toogleFilterOption}>
						<span>Filter by</span>
						<CaretDownOutlined />
						{isOpenFilterOption && (
							<div className={styles.filterOptionArea}>
								<p>Filter by name</p>
								<p>Filter by id</p>
							</div>
						)}
					</div> */}
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
