import PropTypes from 'prop-types';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import React from 'react';
// import {useSelector, useDispatch} from 'react-redux';
import style from './ProductTable.module.css';
import {Tooltip as ReactTooltip} from 'react-tooltip';
import {formatDate} from '../../helper';

const ProductTable = ({handleToggleFormUpdate, productList}) => {
	ProductTable.propTypes = {
		handleToggleFormUpdate: PropTypes.func.isRequired,
		productList: PropTypes.array.isRequired,
	};

	const maxDescriptionLength = 50;

	return (
		<div className={style.tableWrapper}>
			<table className={style.productTable}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Image</th>
						<th>Name</th>
						<th>Unit</th>
						<th>Unit Price(USD)</th>
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
									<img src={product.image} alt={product.name} />
								</div>
							</td>
							<td>{product.name}</td>
							<td>{product.unit}</td>
							<td>{product.unit_price}</td>
							<td>{product.stock}</td>
							<td>{product.status}</td>
							<td>{formatDate(product.expired_at)}</td>
							<td>
								{product.description.length <= maxDescriptionLength ? (
									<p className="productDescription">{product.description}</p>
								) : (
									<p className="productDescription">
										{product.description.substring(0, maxDescriptionLength)}...
										<ReactTooltip
											anchorSelect=".productDescription"
											place="bottom"
											content={product.description}
										/>
									</p>
								)}
							</td>
							<td>
								<div className="btnArea">
									<button
										className="btn"
										onClick={() => handleToggleFormUpdate(product.id)}
									>
										<EditOutlined />
									</button>
									<button className={style.btn}>
										<DeleteOutlined />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ProductTable;
