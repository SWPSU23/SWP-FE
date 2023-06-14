import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Menu} from '../../components/MenuNavi/Menu';
import './Home.css';
import {TodayReport} from '../../components/TodayReport/TodayReport';
import {SalesReport} from '../../components/SalesReport/SalesReport';
import {Transactions} from '../../components/Transactions/Transactions';
import {BestSelling} from '../../components/BestSelling/BestSelling';

export const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="homePage">
			<Menu />
			<div className="homePageContainer">
				<TodayReport />
				<div className="homePageBody">
					<div className="homePageBodyLeft">
						<SalesReport />
						<Transactions />
					</div>
					<div className="homePageBodyRight">
						<BestSelling />
					</div>
				</div>
			</div>
		</div>
	);
};
