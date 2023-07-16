import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import {CheckOutlined, CloseOutlined} from '@ant-design/icons';
import style from './LeaveTable.module.css';
import {data} from '../../shared/ListOfLeave';
import {PopupSuccess} from '../../form/FormPopup/PopupSuccess/PopupSuccess';
import {PopupError} from '../../form/FormPopup/Popup/PopupError';
import Swal from 'sweetalert2';
import {successAlert, errorAlert} from '../../components/Notify/Alert';
import {succesNotify} from '../../components/Notify/Toast';
import {ToastContainer} from 'react-toastify';

export const LeaveTable = () => {
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
	return (
		<div className={style.tableWrapper}>
			<table className={style.leaveTable}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Start Date</th>
						<th>End Date</th>
						<th>Reason</th>
						<th>Comment</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((leave, index) => (
						<tr key={index}>
							<td>{leave.id}</td>
							<td>{leave.name}</td>
							<td>{leave.startDate}</td>
							<td>{leave.endDate}</td>
							<td>{leave.reason}</td>
							<td>{leave.comment}</td>
							<td>
								<div className={style.btnArea}>
									<button className={style.btn} onClick={handleShowSuccess}>
										<CheckOutlined />
									</button>
									<button className={style.btn} onClick={handleShowError}>
										<CloseOutlined />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{isShowSuccess && <PopupSuccess handleToggleForm={handleShowSuccess} />}
			{isShowError && <PopupError handleToggleForm={handleShowError} />}
		</div>
	);
};
