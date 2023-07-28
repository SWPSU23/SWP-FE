import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {Home} from './pages/Home/Home';
import {Product} from './pages/Product/Product';
import {Employee} from './pages/Employee/Employee';
import {Leave} from './pages/Leave/Leave';
import {Salary} from './pages/Salary/Salary';
import {Worksheet} from './pages/Worksheet/Worksheet';
import {Order} from './pages/Order/Order';
import {Login} from './pages/Login/Login';
import socket from './shared/socket';
import {loginPage} from './shared/constant';
import {actGetUserInfo, setManagerInfor} from './redux/authen/action';
import {useDispatch} from 'react-redux';

function App() {
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
				if (response.data.user.role !== 'manager') {
					window.location.href = loginPage;
				} else {
					console.log(response.data.user.id);
					dispatch(setManagerInfor(response.data.user.id));
					const data = {
						employee_id: response.data.user.id,
					};
					socket.on('connect', () => {
						console.log('Connected to Socket.IO server');
						socket.on('joinRoom', (data) => {
							console.log(data);
						});
						socket.emit('joinRoom', data);
					});
				}
			})
			.catch((err) => {
				console.log('error: ' + err);
				window.location.href = loginPage;
			});
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="products" element={<Product />} />
					<Route path="orders" element={<Order />} />
					<Route path="employees" element={<Employee />} />
					<Route path="leave" element={<Leave />} />
					<Route path="salary" element={<Salary />} />
					<Route path="worksheet" element={<Worksheet />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
