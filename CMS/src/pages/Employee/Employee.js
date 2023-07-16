import React, {useEffect, useState} from 'react';
import styles from './Employee.module.css';
import {FormEmployee} from '../../form/FormEmployee/FormEmployee';
import {Menu} from '../../components/MenuNavi/Menu';
import {ActionBar} from '../../components/ActionBar/ActionBar';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import {Header} from '../../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {EmployeeTable} from '../../table/EmployeeTable/EmployeeTable';
import {
	deleteEmployeeAsync,
	fetchEmployeeDetailAsync,
	fetchEmployeeListAsync,
	fetchSearchListSearchAsync,
} from '../../redux/employee/action';
import {deleteProductAsync, fetchProductListSearchAsync} from '../../redux/product/action';

export const Employee = () => {
	// HANDLE FETCH DATA
	const dispatch = useDispatch();

	const employeeData = useSelector((state) => state.user.employeeList);
	const employeeDetail = useSelector((state) => state.user.employeeDetail);
	const totalPages = useSelector((state) => state.product.totalPages);

	console.log(employeeDetail);

	const [employeeList, setEmployeeList] = useState([]);
	// GET DATA
	const fetchData = async () => {
		setLoading(true);
		try {
			await dispatch(fetchEmployeeListAsync(currentPage));
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};
	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
		setEmployeeList(Object.values(employeeData));
	}, [employeeData]);
	// HANDLE LOADING
	const [loading, setLoading] = useState(false);

	// toggle form
	const [openForm, setOpenForm] = useState(false);
	const [openFormUpdate, setOpenFormUpdate] = useState(false);

	const handleToggleForm = () => {
		setOpenForm(!openForm);
	};

	// HANDLE UPDATE
	const handleToggleFormUpdate = async (id) => {
		setOpenFormUpdate(!openFormUpdate);
		setLoading(true);
		try {
			await dispatch(fetchEmployeeDetailAsync(id));
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

	// HANDLE SEARCH
	const handleSearch = async (search) => {
		setLoading(true); // Set loading to true before fetching data
		try {
			await dispatch(fetchSearchListSearchAsync('name', search));
		} catch (error) {
			console.log(error);
		}
		setLoading(false); // Set loading to false after fetching data
	};

	// HANDLE DELETE
	const handleDelete = async (id) => {
		const isDelete = confirm('Are you sure you want to delete this product?');
		console.log(isDelete);
		setLoading(true); // Set loading to true before fetching data
		try {
			if (isDelete) {
				await deleteEmployeeAsync(id);
				await fetchData();
			}
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	return (
		<div className={styles.employeePage}>
			<Menu />
			<Header img="../assets/image/employee.jpg" h2="Employee" />
			<ActionBar
				handleSearch={handleSearch}
				title="New employee"
				handleToggleForm={handleToggleForm}
			/>

			{openForm ? <FormEmployee handleToggleForm={handleToggleForm} /> : <div></div>}

			{openFormUpdate ? (
				<FormEmployee
					employeeDetail={employeeDetail}
					handleToggleForm={handleToggleFormUpdate}
				/>
			) : (
				<div></div>
			)}
			{loading ? (
				<Loading />
			) : (
				<EmployeeTable
					employeeList={employeeList}
					handleToggleFormUpdate={handleToggleFormUpdate}
					handleDelete={handleDelete}
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
