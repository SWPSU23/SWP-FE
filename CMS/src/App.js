import React from 'react';
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

function App() {
	socket.on('connect', () => {
		console.log('Connected to Socket.IO server');
	});
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
