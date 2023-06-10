import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './ProductTable.css';
import {Tooltip as ReactTooltip} from 'react-tooltip';
import {FormProduct} from '../../components/FormProduct/FormProduct';
import {fetchProductList} from '../../redux/action';

function ProductTable() {
	const maxDescriptionLength = 50;

	useEffect(() => {
		console.log('call API');
		dispatch(fetchProductList());
	}, []);

	const dispatch = useDispatch();
	const products = useSelector((state) => state.product);
	const [productList, setProductList] = useState(products);
	useEffect(() => {
		setProductList(products);
	}, [products]);

	const [openForm, setOpenForm] = useState(false);
	// toggle form
	const handleToggleForm = () => {
		setOpenForm(!openForm);
	};
	return (
		<div className="tableWrapper">
			{openForm ? <FormProduct handleToggleForm={handleToggleForm} /> : <div></div>}
			<table className="productTable">
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
								<div className="imageWrapper">
									<img src={product.image} alt={product.name} />
								</div>
							</td>
							<td>{product.name}</td>
							<td>{product.unit}</td>
							<td>{product.unit_price}</td>
							<td>{product.stock}</td>
							<td>{product.status}</td>
							<td>{product.expired_at}</td>
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
									<button className="btn" onClick={handleToggleForm}>
										<EditOutlined />
									</button>
									<button className="btn">
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
}

export default ProductTable;
