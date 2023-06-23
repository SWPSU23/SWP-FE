import React from 'react';
import './Transactions.css';

export const Transactions = () => {
	const transactions = [
		{
			id: 1,
			name: 'Transaction 1',
			price: 10.99,
			time: '18/05/2023',
		},
		{
			id: 2,
			name: 'Transaction 2',
			price: 15.99,
			time: '19/05/2023',
		},
		{
			id: 3,
			name: 'Transaction 3',
			price: 8.99,
			time: '20/05/2023',
		},
		{
			id: 4,
			name: 'Transaction 4',
			price: 12.99,
			time: '21/05/2023',
		},
		{
			id: 5,
			name: 'Transaction 5',
			price: 9.99,
			time: '22/05/2023',
		},
	];

	return (
		<div className="transactions">
			<div className="transactionHeader">
				<div>
					<h1>Transaction Details</h1>
					<h4>Recent Transactions</h4>
				</div>
				<button>See all transactions</button>
			</div>
			<ul>
				{transactions.map((transaction) => (
					<li className="transactionItem" key={transaction.id}>
						<p>ID: {transaction.id}</p>
						<p>Name: {transaction.name}</p>
						<p>Price: {transaction.price}</p>
						<p>Time: {transaction.time}</p>
					</li>
				))}
			</ul>
		</div>
	);
};
