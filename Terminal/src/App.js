import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Container} from './components/Container/Container';
import {FormCheckIn} from './form/FormCheckIn/FormCheckIn';
import {FormWorksheet} from './form/FormWorksheet/FormWorksheet';
import {FormSalary} from './form/FormSalary/FormSalary';
import {FormLeave} from './form/FormLeave/FormLeave';
import {actGetUserInfo, setCashierInfor} from './redux/authen/action';
import {loginPage} from './share/constant';
import {useDispatch, useSelector} from 'react-redux';
import socket from './share/socket';

function App() {
	const userInfo = useSelector((state) => state.authen.cashierInfor);
	console.log(userInfo.id);
	const data = {
		employee_id: userInfo.id,
	};
	socket.on('connect', () => {
		console.log('Connected to Socket.IO server');
		socket.on('joinRoom', (data) => {
			console.log(data);
		});
		socket.emit('joinRoom', data);
	});
	const dispatch = useDispatch();
	useEffect(() => {
		// const userInfo = JSON.parse(localStorage.getItem("user"));
		// console.log("userInfo: " + userInfo);
		// if (userInfo) {
		//   console.log("role: " + userInfo.employee_detail.role);
		//   window.location.href = eval(`route.${userInfo.employee_detail.role}`);
		// }
		actGetUserInfo()
			.then((response) => {
				console.log('response: ' + JSON.stringify(response.data.user.role));
				if (response.data.user.role !== 'cashier') {
					window.location.href = loginPage;
				}
				dispatch(setCashierInfor(response.data.user));
			})
			.catch((err) => {
				console.log('error: ' + err);
				window.location.href = loginPage;
			});
	}, []);
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/checkin" element={<FormCheckIn />} />
					<Route path="/worksheet" element={<FormWorksheet />} />
					<Route path="/salary" element={<FormSalary />} />
					<Route path="/leave" element={<FormLeave />} />
				</Routes>
				<Container />
			</BrowserRouter>
		</div>
	);
}

export default App;
