import React, {useEffect, useState} from 'react';
import styles from './Product.module.css';
import Pagination from '../../components/Pagination/Pagination';
import ProductTable from '../../table/ProductTable/ProductTable';
import {Menu} from '../../components/MenuNavi/Menu';
import {ActionBar} from '../../components/ActionBar/ActionBar';
import {FormProduct} from '../../form/FormProduct/FormProduct';
import Loading from '../../components/Loading/Loading';
import {
	fetchProductDetailAsync,
	fetchProductListAsync,
	fetchProductListSearchAsync,
} from '../../redux/product/action';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../../components/Header/Header';

export const Product = () => {
	// HANDLE LOADING
	const [loading, setLoading] = useState(false);

	//HANDLE FEATCH DATA
	const productData = useSelector((state) => state.product.productList);
	const productDetail = useSelector((state) => state.product.productDetails);

	console.log('productData from redux: ', productData);

	const [productList, setProductList] = useState([]);
	const dispatch = useDispatch();

	// GET DATA
	const fetchData = async () => {
		setLoading(true); // Set loading to true before fetching data
		try {
			await dispatch(fetchProductListAsync());
		} catch (error) {
			console.log(error);
		}
		setLoading(false); // Set loading to false after fetching data
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		console.log('set lai');
		setProductList(Object.values(productData));
	}, [productData]);

	// HANDLE SEARCH
	const handleSearch = async (search) => {
		setLoading(true); // Set loading to true before fetching data
		try {
			await dispatch(dispatch(fetchProductListSearchAsync('name', search)));
		} catch (error) {
			console.log(error);
		}
		setLoading(false); // Set loading to false after fetching data
	};

	// HANDLE TOGGLE FORM
	const [openForm, setOpenForm] = useState(false);
	const [openFormUpdate, setopenFormUpdate] = useState(false);

	const handleToggleForm = () => {
		setOpenForm(!openForm);
	};

	const handleToggleFormUpdate = async (id) => {
		setopenFormUpdate(!openFormUpdate);
		setLoading(true); // Set loading to true before fetching data
		try {
			await dispatch(fetchProductDetailAsync(id));
		} catch (error) {
			console.log(error);
		}
		setLoading(false); // Set loading to false after fetching data
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
		<div className={styles.productPage}>
			<Menu />
			<Header img="../assets/image/product.jpg" h2="Product" />
			<ActionBar
				handleSearch={handleSearch}
				img="../assets/image/product.jpg"
				h2="Product"
				title="New product"
				handleToggleForm={handleToggleForm}
			/>
			{openForm ? <FormProduct handleToggleForm={handleToggleForm} /> : <div></div>}

			{openFormUpdate ? (
				<FormProduct
					productDetail={productDetail}
					handleToggleForm={handleToggleFormUpdate}
				/>
			) : (
				<div></div>
			)}
			{loading ? (
				<Loading />
			) : (
				<ProductTable
					productList={productList}
					handleToggleFormUpdate={handleToggleFormUpdate}
				/>
			)}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};
