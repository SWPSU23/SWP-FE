import React from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import {Product} from './pages/Product/Product';
import {User} from './pages/User/User';
import {Home} from './pages/Home/Home';

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
