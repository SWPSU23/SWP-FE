import React, {useState} from 'react';
import './ProductTable.css';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import {FormProduct} from '../../components/FormProduct/FormProduct';

function ProductTable() {
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
						<th>Unit Price</th>
						<th>Stock</th>
						<th>Status</th>
						<th>Expired at</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>125A123199</td>
						<td>
							<div className="imageWrapper">
								<img src="https://nutritionfacts.org/app/uploads/2019/03/Red-bull.jpg" />
							</div>
						</td>
						<td>Redbull</td>
						<td>Can</td>
						<td>10.000</td>
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
						<td>10.000</td>
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
						<td>10.000</td>
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
				</tbody>
			</table>
		</div>
	);
}

export default ProductTable;
