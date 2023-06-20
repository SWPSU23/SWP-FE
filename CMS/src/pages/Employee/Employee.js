import React, {useEffect, useState} from 'react';
import './Employee.css';
import {FormEmployee} from '../../form/FormEmployee/FormEmployee';
import {Menu} from '../../components/MenuNavi/Menu';
import {ActionBar} from '../../components/ActionBar/ActionBar';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import {Header} from '../../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import {EmployeeTable} from '../../table/EmployeeTable/EmployeeTable';
import {fetchEmployeeListAsync} from '../../redux/employee/action';

export const Employee = () => {
	const dispatch = useDispatch();
	const employeeData = useSelector((state) => state.user.employeeList);
	const [employeeList, setEmployeeList] = useState([]);
	// GET DATA
	const fetchData = async () => {
		setLoading(true);
		try {
			await dispatch(fetchEmployeeListAsync());
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
		<div className="employeePage">
			<Menu />
			<Header img="../assets/image/employee.jpg" h2="Employee" />
			<ActionBar title="New employee" handleToggleForm={handleToggleForm} />
			{openForm ? <FormEmployee handleToggleForm={handleToggleForm} /> : <div></div>}
			{loading ? <Loading /> : <EmployeeTable employeeList={employeeList} />}
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};
