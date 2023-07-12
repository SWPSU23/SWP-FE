import React from 'react';
import style from './PreOrderTable.module.css';
import {ButtonSmall} from '../../button/ButtonSmall/ButtonSmall';

export const PreOrderTable = () => {
	return (
		<div className={style.tableWrapper}>
			<table className={style.preOrderTable}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Total</th>
						<th className="deleteAction">Delete</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Red bull</td>
						<td>2</td>
						<td>20.000</td>
						<td>40.000</td>
						<td>
							<ButtonSmall
								style={{backgroundColor: 'black', color: 'white'}}
								title="X"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
