import React, {useState, useEffect} from 'react';
import style from './Order.module.css';
import {Menu} from '../../components/MenuNavi/Menu';
import OrderTable from '../../table/OrderTable/OrderTable';
import Loading from '../../components/Loading/Loading';
import {ActionBar} from '../../components/ActionBar/ActionBar';
import Pagination from '../../components/Pagination/Pagination';
import {Header} from '../../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {fetchOrderListAsync} from '../../redux/order/action';
import {FormOrder} from '../../form/FormOrder/FormOrder';

export const Order = () => {
	// HANDLE LOADING
	const [loading, setLoading] = useState(false);

	//HANDLE FEATCH DATA
	const orderData = useSelector((state) => state.order.orderList);
	const orderDetail = useSelector((state) => state.order.orderDetails);

	const [orderList, setOrderList] = useState([]);
	const dispatch = useDispatch();

	// GET DATA
	const fetchData = async () => {
		setLoading(true); //Set loading to true before fetching data
		try {
			console.log('fetching data');
			await dispatch(fetchOrderListAsync());
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
		setOrderList(Object.values(orderData));
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
			<ActionBar
				handleSearch={handleSearch}
				title="New order"
				handleToggleForm={handleToggleForm}
			/>
			{openForm ? <FormOrder handleToggleForm={handleToggleForm} /> : <div></div>}
			{loading ? (
				<Loading />
			) : (
				<OrderTable handleToggleForm={handleToggleForm} orderList={orderList} />
			)}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};
