import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Menu} from '../../components/MenuNavi/Menu';
import style from './Home.module.css';
import {TodayReport} from '../../components/TodayReport/TodayReport';
import {SalesReport} from '../../components/SalesReport/SalesReport';
import {Transactions} from '../../components/Transactions/Transactions';
import {BestSelling} from '../../components/BestSelling/BestSelling';
import {BestSellingPieChart} from '../../components/BestSellingPieChart/BestSellingPieChart';

export const Home = () => {
	const navigate = useNavigate();

	return (
		<div className={style.homePage}>
			<Menu />
			<div className={style.homePageContainer}>
				<TodayReport />
				<div className={style.homePageBody}>
					<div className={style.homePageBodyLeft}>
						<SalesReport />
						<Transactions />
					</div>
					<div className={style.homePageBodyRight}>
						<BestSellingPieChart />
						<BestSelling />
					</div>
				</div>
			</div>
		</div>
	);
};
