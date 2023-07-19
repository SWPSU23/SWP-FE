import React, {useEffect, useState} from 'react';
import styles from './Leave.module.css';
import {Menu} from '../../components/MenuNavi/Menu';
import {Header} from '../../components/Header/Header';
import {LeaveTable} from '../../table/LeaveTable/LeaveTable';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLeaveListAsync} from '../../redux/leave/action';
import {confirmModal, confirmToggle, rejectToggle} from '../../components/Notify/Alert';

export const Leave = () => {
	const leaveFormData = useSelector((state) => state.leave.leaveFormList);
	const totalPages = useSelector((state) => state.leave.totalPages);

	const [leaveFormList, setLeaveFormList] = useState([]);
	const dispatch = useDispatch();
	// GET DATA
	const fetchData = async () => {
		console.log(currentPage);
		setLoading(true);
		try {
			const response = await dispatch(fetchLeaveListAsync(currentPage));
			console.log('Data from API:', response.data);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		console.log('leaveList changed', leaveFormList);
		// const filteredLeaveList = Object.values(leaveFormData).filter(
		// 	(leaveForm) => leaveForm.status === 'waiting'
		// );
		setLeaveFormList(leaveFormData);
	}, [leaveFormData]);
	// HANDLE LOADING
	const [loading, setLoading] = useState(false);
	// HANDLE PAGINATION
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		fetchData();
	}, [currentPage]);
	// HANDLE TOGGLE
	const handleToggleConfirm = async () => {
		let isConfirm = await confirmToggle('Yes')
			.then((isConfirmed) => {
				return isConfirmed;
			})
			.catch((error) => {
				console.error('Confirmation error:', error);
			});

		setLoading(true); // Set loading to true before fetching data

		setLoading(false);
	};
	const handleToggleReject = async () => {
		let isConfirm = await rejectToggle('Yes')
			.then((isConfirmed) => {
				return isConfirmed;
			})
			.catch((error) => {
				console.error('Confirmation error:', error);
			});

		setLoading(true); // Set loading to true before fetching data

		setLoading(false);
	};
	const handlePageChange = (page) => {
		setLoading(true);
		setCurrentPage(page);
		console.log(currentPage);
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};
	return (
		<div className={styles.leavePage}>
			<Menu />
			<Header img="../assets/image/leave.jpg" h2="Leave" />
			{loading ? (
				<Loading />
			) : (
				<LeaveTable
					leaveFormList={leaveFormList}
					handleToggleConfirm={handleToggleConfirm}
					handleToggleReject={handleToggleReject}
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
