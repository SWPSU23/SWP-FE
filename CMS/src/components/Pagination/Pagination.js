import PropTypes from 'prop-types';
import React from 'react';
import styles from './Pagination.module.css';

function Pagination({currentPage, totalPages, onPageChange}) {
	Pagination.propTypes = {
		currentPage: PropTypes.number.isRequired,
		totalPages: PropTypes.number.isRequired,
		onPageChange: PropTypes.func.isRequired,
	};

	const handlePrevClick = () => {
		if (currentPage === 1) {
			onPageChange(totalPages);
			return;
		}
		onPageChange(currentPage - 1);
	};

	const handleNextClick = () => {
		if (currentPage === totalPages) {
			onPageChange(1);
			return;
		}
		onPageChange(currentPage + 1);
	};

	const handlSelectPage = (selectPage) => {
		onPageChange(selectPage);
	};

	return (
		<div className={styles.pagination}>
			<button className={styles['pagination-button']} onClick={handlePrevClick}>
				{'<'}
			</button>
			<button className={`${styles['pagination-button']} ${styles.active}`}>
				{currentPage}
			</button>
			{currentPage + 1 <= totalPages && (
				<button
					className={styles['pagination-button']}
					onClick={() => handlSelectPage(currentPage + 1)}
				>
					{currentPage + 1}
				</button>
			)}
			{currentPage + 2 <= totalPages && (
				<button
					className={styles['pagination-button']}
					onClick={() => handlSelectPage(currentPage + 2)}
				>
					{currentPage + 2}
				</button>
			)}
			<button className={styles['pagination-button']} onClick={handleNextClick}>
				{'>'}
			</button>
		</div>
	);
}

export default Pagination;
