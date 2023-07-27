import PropTypes from 'prop-types';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import React from 'react';
// import {useSelector, useDispatch} from 'react-redux';
import style from './ProductTable.module.css';
import {Tooltip as ReactTooltip} from 'react-tooltip';
import {formatDate} from '../../helper';
import {server} from '../../shared/constant';

const ProductTable = ({handleToggleFormUpdate, productList, handleDelete}) => {
	ProductTable.propTypes = {
		handleToggleFormUpdate: PropTypes.func.isRequired,
		handleDelete: PropTypes.func.isRequired,
		productList: PropTypes.array.isRequired,
	};

	const maxDescriptionLength = 60;

	console.log('list product', productList);

	return (
		<div className={style.tableWrapper}>
			<table className={style.productTable}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Image</th>
						<th>Name</th>
						<th>Unit</th>
						<th>Cost Price</th>
						<th>Stock</th>
						<th>Status</th>
						<th>Expired at</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{productList.map((product, index) => (
						<tr key={index}>
							<td>{product.id}</td>
							<td>
								<div className={style.imageWrapper}>
									<img
										src={`${server}/v1/asset/product/images/${product.image}`}
										alt={product.name}
									/>
								</div>
							</td>
							<td className={style.productName}>{product.name}</td>
							<td>{product.unit}</td>
							<td className={style.productPrice}>{product.cost_price}</td>
							<td>{product.stock}</td>
							<td>
								<p
									className={style.status}
									style={
										product.status === 'available'
											? {backgroundColor: 'green'}
											: {backgroundColor: 'red'}
									}
								>
									{product.status}
								</p>
							</td>
							<td>{formatDate(product.expired_at)}</td>
							<td>
								{product.description.length <= maxDescriptionLength ? (
									<p className={style.productDescription}>
										{product.description}
									</p>
								) : (
									<p
										className={style.productDescription}
										data-tooltip-id="my-tooltip"
										data-tooltip-content={product.description}
									>
										{product.description.substring(0, maxDescriptionLength)}...
									</p>
								)}
							</td>
							<td>
								<div className={style.btnArea}>
									<button
										className={style.btn}
										onClick={() => handleToggleFormUpdate(product.id)}
									>
										<EditOutlined />
									</button>
									<button
										className={style.btn}
										onClick={() => handleDelete(product.id)}
									>
										<DeleteOutlined />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<ReactTooltip
				id="my-tooltip"
				style={{
					borderRadius: '12px',
					width: '30%',
					backgroundColor: 'rgba(0, 0, 0, 0.7)',
				}}
			/>
		</div>
	);
};

export default ProductTable;
