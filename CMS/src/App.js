import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';

import {Product} from './components/Product/Product';
import {User} from './components/User/User';
import {Home} from './components/Home/Home';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="products" element={<Product />} />
					<Route path="users" element={<User />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
