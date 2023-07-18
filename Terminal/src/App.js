import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Header} from './components/Header/Header';
import {Container} from './components/Container/Container';
import {FormCheckIn} from './form/FormCheckIn/FormCheckIn';
import {FormWorksheet} from './form/FormWorksheet/FormWorksheet';
import {FormSalary} from './form/FormSalary/FormSalary';
import {FormLeave} from './form/FormLeave/FormLeave';

function App() {
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
