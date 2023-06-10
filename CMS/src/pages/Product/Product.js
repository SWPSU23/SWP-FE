import React, {useState} from 'react';
import './Product.css';
import Pagination from '../../components/Pagination/Pagination';
import ProductTable from '../../components/ProductTable/ProductTable';
import {Menu} from '../../components/MenuNavi/Menu';
import {ActionBar} from '../../components/ActionBar/ActionBar';
import {FormProduct} from '../../components/FormProduct/FormProduct';
import Loading from '../../components/Loading/Loading';

export const Product = () => {
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
		<div className="productPage">
			<Menu />
			<ActionBar title="New product" handleToggleForm={handleToggleForm} />
			{openForm ? <FormProduct handleToggleForm={handleToggleForm} /> : <div></div>}
			{loading ? <Loading /> : <ProductTable handleToggleForm={handleToggleForm} />}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};
