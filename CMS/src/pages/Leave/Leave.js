import React, {useEffect, useState} from 'react';
import styles from './Leave.module.css';
import {Menu} from '../../components/MenuNavi/Menu';
import {Header} from '../../components/Header/Header';
import {LeaveTable} from '../../table/LeaveTable/LeaveTable';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';

export const Leave = () => {
	// HANDLE LOADING
	const [loading, setLoading] = useState(false);
	// HANDLE PAGINATION
	const [currentPage, setCurrentPage] = useState(1);
	const handlePageChange = (page) => {
		setLoading(true);
		setCurrentPage(page);
		console.log(currentPage);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};
	return (
		<div className={styles.revenuePage}>
			<Menu />
			<Header img="../assets/image/leave.jpg" h2="Leave" />
			{loading ? <Loading /> : <LeaveTable />}
			<Pagination onPageChange={handlePageChange} />
		</div>
	);
};
