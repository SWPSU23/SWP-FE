import React, {useState, useEffect} from 'react';
import style from './Order.module.css';
import {Menu} from '../../components/MenuNavi/Menu';
import OrderTable from '../../table/OrderTable/OrderTable';
import Loading from '../../components/Loading/Loading';
import {ActionBar} from '../../components/ActionBar/ActionBar';
import Pagination from '../../components/Pagination/Pagination';
import {Header} from '../../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {
	fetchOrderListAsync,
	fetchOrderDetailAsync,
	deleteOrderAsync,
} from '../../redux/order/action';
import {FormOrder} from '../../form/FormOrder/FormOrder';
import {confirmModal} from '../../components/Notify/Alert';

export const Order = () => {
	// HANDLE LOADING
	const [loading, setLoading] = useState(false);

	//HANDLE FEATCH DATA
	const orderData = useSelector((state) => state.order.orderList);
	const orderDetail = useSelector((state) => state.order.orderDetails);
	const totalPages = useSelector((state) => state.product.totalPages);

	const [orderList, setOrderList] = useState([]);
	const dispatch = useDispatch();

	// GET DATA
	const fetchData = async () => {
		setLoading(true); // Set loading to true before fetching data
		try {
			console.log('fetching data');
			await dispatch(fetchOrderListAsync(currentPage));
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		console.log('orderList changed', orderList);
		// Filter orders with status === true
		const filteredOrderList = Object.values(orderData).filter((order) => order.status === true);
		setOrderList(filteredOrderList);
	}, [orderData]);

	// HANDLE SEARCH
	const handleSearch = async (search) => {
		// setLoading(true); // Set loading to true before fetching data
		// try {
		// 	await dispatch(dispatch(fetchProductListSearchAsync('name', search)));
		// } catch (error) {
		// 	console.log(error);
		// }
		// setLoading(false); // Set loading to false after fetching data
	};

	// HANDLE TOGGLE FORM
	const [openForm, setOpenForm] = useState(false);
	const [openFormUpdate, setopenFormUpdate] = useState(false);

	const handleToggleForm = () => {
		setOpenForm(!openForm);
	};

	const handleToggleFormUpdate = async (id) => {
		setLoading(true); // Set loading to true before fetching data
		try {
			await dispatch(fetchOrderDetailAsync(id));
		} catch (error) {
			console.log(error);
		}
		setOpenForm(!openForm);
		console.log(orderDetail);
		setLoading(false);
	};

	// HANDLE DELETE
	const handleToggleFormDelete = async (id) => {
		let isDelete = await confirmModal('Yes, delete it')
			.then((isConfirmed) => {
				return isConfirmed;
			})
			.catch((error) => {
				console.error('Confirmation error:', error);
			});

		setLoading(true); // Set loading to true before fetching data

		try {
			if (isDelete) {
				await deleteOrderAsync(id);
				await fetchData(); // Assuming fetchData() fetches the updated order data
			}
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
		console.log(currentPage);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};
	return (
		<div className={style.orderPage}>
			<Menu />
			<Header img="../assets/image/order.jpg" h2="Order" />
			<ActionBar
				handleSearch={handleSearch}
				title="New order"
				handleToggleForm={handleToggleForm}
			/>
			{openForm ? (
				<FormOrder orderDetail={orderDetail} handleToggleForm={handleToggleForm} />
			) : (
				<div></div>
			)}
			{loading ? (
				<Loading />
			) : (
				<OrderTable
					handleToggleFormUpdate={handleToggleFormUpdate}
					orderList={orderList}
					handleToggleFormDelete={handleToggleFormDelete}
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
