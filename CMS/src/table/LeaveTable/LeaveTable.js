import React, {useState} from 'react';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import style from './LeaveTable.module.css';
import {data} from '../../shared/ListOfLeave';
import {PopupSuccess} from '../../form/FormPopup/PopupSuccess/PopupSuccess';
import {PopupError} from '../../form/FormPopup/Popup/PopupError';
import Swal from 'sweetalert2';
import {successAlert, errorAlert} from '../../components/Notify/Alert';
import {succesNotify} from '../../components/Notify/Toast';
import propTypes from 'prop-types';
import {ToastContainer} from 'react-toastify';

export const LeaveTable = ({leaveFormList, handleToggleConfirm, handleToggleReject}) => {
	LeaveTable.propTypes = {
		leaveFormList: propTypes.array.isRequired,
		handleToggleConfirm: propTypes.func.isRequired,
		handleToggleReject: propTypes.func.isRequired,
	};
	console.log('leave form list:', leaveFormList);
	const [isShowSuccess, setIsShowSuccess] = useState();
	const [isShowError, setIsShowError] = useState();
	const [isConfirm, setIsConfirm] = useState(false);
	const handleShowSuccess = () => {
		// setIsShowSuccess(!isShowSuccess);
		successAlert('Thank for your message. It has been sent.');
	};
	const handleShowError = async () => {
		// setIsShowError(!isShowError);
		errorAlert('Please check and try again.');
	};
	const handleShowConfirm = () => {};
	return (
		<div className={style.tableWrapper}>
			<table className={style.leaveTable}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Number Of Leave Days Used</th>
						<th>Start Date</th>
						<th>End Date</th>
						<th>Reason</th>
						<th>Comment</th>
						<th>Status</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{leaveFormList.map((leave, index) => (
						<tr key={index}>
							<td>{leave.employee_id}</td>
							<td>{leave.number_of_leave_days_used}</td>
							<td>{leave.start_date_of_leave}</td>
							<td>{leave.end_date_of_leave}</td>
							<td>{leave.reason_leave}</td>
							<td>{leave.manager_replied}</td>
							<td>{leave.status}</td>

							<td>
								<div className={style.btnArea}>
									<button className={style.btn} onClick={handleToggleConfirm}>
										<CheckOutlined />
									</button>
									<button className={style.btn} onClick={handleToggleReject}>
										<CloseOutlined />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
