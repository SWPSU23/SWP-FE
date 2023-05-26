import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './ProductTable.css';
import {FormProduct} from '../../components/FormProduct/FormProduct';
import {fetchProductList} from '../../redux/action';

function ProductTable() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProductList());
	}, []);

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
							<td>{product.unitPrice}</td>
							<td>{product.stock}</td>
							<td>{product.status}</td>
							<td>{product.expiredAt}</td>
							<td>
								<p className="productDescription">{product.description}</p>
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
					{/* <tr>
						<td>125A123199</td>
						<td>
							<div className="imageWrapper">
								<img src="https://nutritionfacts.org/app/uploads/2019/03/Red-bull.jpg" />
							</div>
						</td>
						<td>Redbull</td>
						<td>Can</td>
						<td>10</td>
						<td>200</td>
						<td>Available</td>
						<td>15/06/2024</td>
						<td>
							<p className="productDescription">
								Nước tăng lực RedBull (Red Bull, Bò Húc, Bò Cụng) 250ml là loại nước
								tăng lực nổi tiếng
							</p>
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
					<tr>
						<td>125A123199</td>
						<td>
							<div className="imageWrapper">
								<img src="https://nutritionfacts.org/app/uploads/2019/03/Red-bull.jpg" />
							</div>
						</td>
						<td>Redbull</td>
						<td>Can</td>
						<td>10</td>
						<td>200</td>
						<td>Available</td>
						<td>15/06/2024</td>
						<td>
							<p className="productDescription">
								Nước tăng lực RedBull (Red Bull, Bò Húc, Bò Cụng) 250ml là loại nước
								tăng lực nổi tiếng
							</p>
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
					</tr> */}
				</tbody>
			</table>
		</div>
	);
}

export default ProductTable;
