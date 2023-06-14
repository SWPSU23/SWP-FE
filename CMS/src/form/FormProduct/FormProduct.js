import PropTypes from 'prop-types';
import React, {useState, useRef, useEffect} from 'react';
import styles from './FormProduct.module.css';
import {formatDate} from '../../helper';

export const FormProduct = ({handleToggleForm, productDetail}) => {
	FormProduct.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
		productDetail: PropTypes.array.isRequired,
	};
	console.log(productDetail);

	const [imagePreview, setImagePreview] = useState('');
	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [unit, setUnit] = useState('');
	const [unitPrice, setUnitPrice] = useState('');
	const [stock, setStock] = useState('');
	const [status, setStatus] = useState('');
	const [expiredAt, setExpiredAt] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		if (productDetail && productDetail.length > 0 && productDetail[0].expired_at) {
			const product = productDetail[0];
			const date = formatDate(product.expired_at);
			setId(product.id ? product.id.toString() : '');
			setName(product.name || '');
			setUnit(product.unit || '');
			setUnitPrice(product.unit_price ? product.unit_price.toString() : '');
			setStock(product.stock ? product.stock.toString() : '');
			setStatus(product.status && product.status.data[0] ? product.status.data[0] : '');
			setExpiredAt(product.expired_at || '');
			setDescription(product.description || '');
			setImagePreview(product.image || '');
		}
	}, [productDetail]);

	const fileInputRef = useRef(null);

	const handleImageClick = () => {
		fileInputRef.current.click();
	};

	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onload = () => {
				setImagePreview(reader.result);
			};

			reader.readAsDataURL(file);
		} else {
			setImagePreview('');
		}
	};

	const handleSubmit = () => {
		const formData = {
			id,
			name,
			unit,
			unitPrice,
			stock,
			status,
			expiredAt,
			description,
		};
		console.log(formData);

		// Clear the form fields after submission
		setId('');
		setName('');
		setUnit('');
		setUnitPrice('');
		setStock('');
		setStatus('');
		setExpiredAt('');
		setDescription('');
	};

	return (
		<div className={styles.formProduct}>
			<div className={styles.formContainer}>
				<h1>Product</h1>
				<div className={styles.formContainerTop}>
					<div className={styles.inputImageContainer} onClick={handleImageClick}>
						<div className={styles.inputImage}>
							{imagePreview ? (
								<img
									className={styles.imagePreview}
									src={imagePreview}
									alt="Image Preview"
								/>
							) : (
								<img
									src="https://th.bing.com/th/id/R.d90a006b299492ac099fb038a15c7e55?rik=MbpQJohLOYQCpQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9i4%2fedX%2f9i4edX7GT.png&ehk=XFTwQUyWNs2AErIJu4V2zfAHUBz12gOgV3IY92SabvE%3d&risl=&pid=ImgRaw&r=0"
									alt="Camera"
								/>
							)}
						</div>
						<input
							type="file"
							accept="image/*"
							onChange={handleImageUpload}
							ref={fileInputRef}
							style={{display: 'none'}}
						/>
					</div>
				</div>

				<div className={styles.formContainerCenter}>
					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Id: </h2>
						<input
							placeholder="id ..."
							value={id}
							onChange={(e) => setId(e.target.value)}
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Name: </h2>
						<input
							placeholder="name ..."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Unit: </h2>
						<input
							placeholder="unit ..."
							value={unit}
							onChange={(e) => setUnit(e.target.value)}
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Unit price: </h2>
						<input
							placeholder="unit price ..."
							value={unitPrice}
							onChange={(e) => setUnitPrice(e.target.value)}
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Stock: </h2>
						<input
							placeholder="stock ..."
							value={stock}
							onChange={(e) => setStock(e.target.value)}
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Status: </h2>
						<input
							placeholder="status ..."
							value={status}
							onChange={(e) => setStatus(e.target.value)}
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Expired at: </h2>
						<input
							placeholder="expired at ..."
							value={expiredAt}
							onChange={(e) => setExpiredAt(e.target.value)}
						/>
					</div>
				</div>

				<div className={styles.formContainerBottom}>
					<div className={`${styles['formInput']} ${styles.inputDesc}`}>
						<h2 className={styles.labelInput}>Description: </h2>
						<input
							placeholder="description ..."
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
				</div>

				<div className={styles.formContainerButton}>
					<button
						onClick={handleToggleForm}
						className={`${styles['btn']} ${styles.btnClose}`}
					>
						Close
					</button>

					<button onClick={handleSubmit} className={`${styles['btn']} ${styles.btnSave}`}>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};
