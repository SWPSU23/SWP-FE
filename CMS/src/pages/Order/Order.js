import React, {useState} from 'react';
import style from './Order.module.css';
import {Menu} from '../../components/MenuNavi/Menu';
import OrderTable from '../../table/OrderTable/OrderTable';
import Loading from '../../components/Loading/Loading';
import {ActionBar} from '../../components/ActionBar/ActionBar';
import Pagination from '../../components/Pagination/Pagination';
import {Header} from '../../components/Header/Header';

export const Order = () => {
	// HANDLE LOADING
	const [loading, setLoading] = useState(false);

	// HANDLE TOGGLE FORM
	const [openForm, setOpenForm] = useState(false);

	const handleToggleForm = () => {
		setOpenForm(!openForm);
	};

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
		<div className={style.orderPage}>
			<Menu />
			<Header img="../assets/image/order.jpg" h2="Order" />
			<ActionBar title="New order" />
			{openForm ? <OrderTable handleToggleForm={handleToggleForm} /> : <div></div>}
			{loading ? <Loading /> : <OrderTable />}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};
