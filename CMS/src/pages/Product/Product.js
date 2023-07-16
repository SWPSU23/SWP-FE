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
	fetchCategoryListAsync,
	deleteProductAsync,
} from '../../redux/product/action';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../../components/Header/Header';
import {confirmModal} from '../../components/Notify/Alert';
import {succesNotify} from '../../components/Notify/Toast';
import {ToastContainer} from 'react-toastify';

export const Product = () => {
	// HANDLE LOADING
	const [loading, setLoading] = useState(false);

	//HANDLE FEATCH DATA
	const productData = useSelector((state) => state.product.productList);
	const productDetail = useSelector((state) => state.product.productDetails);
	const totalPages = useSelector((state) => state.product.totalPages);
	const categoryList = useSelector((state) => state.product.categoryList);

	const [productList, setProductList] = useState([]);
	const dispatch = useDispatch();

	// GET DATA
	const fetchData = async () => {
		console.log(currentPage);
		setLoading(true); // Set loading to true before fetching data
		try {
			await dispatch(fetchProductListAsync(currentPage));
			await dispatch(fetchCategoryListAsync());
		} catch (error) {
			console.log(error);
		}
		setLoading(false); // Set loading to false after fetching data
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setProductList(Object.values(productData));
	}, [productData]);

	// HANDLE SEARCH
	const handleSearch = async (search) => {
		setLoading(true); // Set loading to true before fetching data
		try {
			await dispatch(fetchProductListSearchAsync('name', search));
		} catch (error) {
			console.log(error);
		}
		setLoading(false); // Set loading to false after fetching data
	};

	// HANDLE DELETE
	const handleDelete = async (id) => {
		let isDelete = await confirmModal('Yes, delete it')
			.then((isConfirmed) => {
				return isConfirmed;
				// console.log('Confirmation result:', isConfirmed); // Output: Confirmation result: true
			})
			.catch((error) => {
				console.error('Confirmation error:', error);
			});
		console.log(isDelete);
		setLoading(true); // Set loading to true before fetching data
		try {
			if (isDelete) {
				await deleteProductAsync(id);
				await fetchData();
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	// HANDLE TOGGLE FORM
	const [openForm, setOpenForm] = useState(false);
	const [openFormUpdate, setopenFormUpdate] = useState(false);

	// useEffect(() => {
	// 	if (openForm === false) {
	// 		fetchData();
	// 	}
	// }, [openForm]);

	const handleToggleForm = () => {
		setOpenForm(!openForm);
	};

	const handleToggleFormUpdate = async (id) => {
		console.log('run update toggle form', id);
		setopenFormUpdate(!openFormUpdate);
		setLoading(true); // Set loading to true before fetching data
		try {
			await dispatch(fetchProductDetailAsync(id));
			// console.log('run fetch data');
			// await fetchData();
			// console.log('done fetching data');
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	// HANDLE PAGINATION
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		fetchData();
	}, [currentPage]);

	const handlePageChange = (page) => {
		setLoading(true);
		setCurrentPage(page);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	const showToast = (text) => {
		succesNotify(text);
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
			{openForm ? (
				<FormProduct
					showToast={showToast}
					handleToggleForm={handleToggleForm}
					categoryList={categoryList}
				/>
			) : (
				<div></div>
			)}

			{openFormUpdate ? (
				<FormProduct
					productDetail={productDetail}
					handleToggleForm={handleToggleFormUpdate}
					categoryList={categoryList}
					showToast={showToast}
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
					handleDelete={handleDelete}
				/>
			)}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
			<ToastContainer />
		</div>
	);
};
