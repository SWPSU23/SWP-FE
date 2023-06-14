import React, {useState} from 'react';
import './Salary.css';
import {Menu} from '../../components/MenuNavi/Menu';
import PayRollTable from '../../table/PayRollTable/PayRollTable';
import {ActionBar} from '../../components/ActionBar/ActionBar';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';
import {Header} from '../../components/Header/Header';

export const Salary = () => {
	// HANDLE LOADING
	const [loading, setLoading] = useState(false);

	// HANDLE PAGINATION
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 10; // Assuming there are 10 pages

	const handlePageChange = (page) => {
		setLoading(true);
		setCurrentPage(page);
		console.log(currentPage);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	return (
		<div className="salaryPage">
			<Menu />
			<Header img="../assets/image/salary.jpg" h2="PayRoll" />
			<ActionBar title="Calculate salary" />
			{loading ? <Loading /> : <PayRollTable />}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};
