import PropTypes from 'prop-types';
const moment = require('moment');
import React, {useState, useRef, useEffect} from 'react';
import styles from './FormProduct.module.css';
import {convertDateFormat, formatDate, convertDateInputFormat} from '../../helper';
import {useDispatch} from 'react-redux';
import {handleUploadImageAsync, updateProductDetailAsync} from '../../redux/product/action';
import {server} from '../../shared/constant';

export const FormProduct = ({handleToggleForm, productDetail}) => {
	FormProduct.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
		productDetail: PropTypes.array.isRequired,
	};

	const dispatch = useDispatch();

	const [imagePreview, setImagePreview] = useState('');
	const [imageSend, setImageSend] = useState('');
	const [name, setName] = useState('');
	const [unit, setUnit] = useState('');
	const [unitPrice, setUnitPrice] = useState('');
	const [stock, setStock] = useState('');
	const [status, setStatus] = useState('available');
	const [expiredAt, setExpiredAt] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		if (productDetail) {
			const image = `${server}/v1/asset/product/images/${productDetail.image}`;
			setImagePreview(image);
			const product = productDetail;
			const date = convertDateInputFormat(product.expired_at);
			setName(product.name || '');
			setUnit(product.unit || '');
			setUnitPrice(product.unit_price ? product.unit_price.toString() : '');
			setStock(product.stock ? product.stock.toString() : '');
			setStatus(product.status ? product.status : 'available');
			setExpiredAt(date || '');
			setDescription(product.description || '');
		}
	}, [productDetail]);

	const fileInputRef = useRef(null);

	const handleImageClick = () => {
		fileInputRef.current.click();
	};

	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			setImageSend(file);
			const reader = new FileReader();

			reader.onload = () => {
				setImagePreview(reader.result);
			};

			reader.readAsDataURL(file);
		} else {
			setImagePreview('');
		}
	};

	// HANDLE SUBMIT FORM DATA

	const handleSubmit = () => {
		const formData = {
			name,
			unit,
			unitPrice,
			stock,
			status,
			expiredAt,
			description,
		};
		dispatch(handleUploadImageAsync(imageSend, formData, false));

		// Clear the form fields after submission
		setName('');
		setUnit('');
		setUnitPrice('');
		setStock('');
		setStatus('');
		setExpiredAt('');
		setDescription('');
		handleToggleForm();
	};

	function getCurrentTime() {
		const currentTime = moment().format('HH:mm:ss');
		return currentTime;
	}

	const handleSubmitUpdate = () => {
		const formData = {
			id: productDetail.id,
			name,
			unit,
			unitPrice,
			stock,
			status,
			description,
		};
		dispatch(handleUploadImageAsync(imageSend, formData, true));
		// Clear the form fields after submission
		setName('');
		setUnit('');
		setUnitPrice('');
		setStock('');
		setStatus('available');
		setExpiredAt('');
		setDescription('');
		handleToggleForm();
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
						<select
							name="status"
							id="status"
							className={styles.statusDropdown}
							value={status}
							onChange={(e) => setStatus(e.target.value)}
						>
							<option className={styles.statusDropdownOption} value="available">
								Available
							</option>
							<option className={styles.statusDropdownOption} value="unavailable">
								Unavailable
							</option>
						</select>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Expired at: </h2>
						<input
							type="date"
							placeholder="expired at ..."
							value={expiredAt}
							onChange={(e) => {
								setExpiredAt(e.target.value);
								console.log(e.target.value);
							}}
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

					{productDetail ? (
						<button
							onClick={handleSubmitUpdate}
							className={`${styles['btn']} ${styles.btnSave}`}
						>
							Update
						</button>
					) : (
						<button
							onClick={handleSubmit}
							className={`${styles['btn']} ${styles.btnSave}`}
						>
							Save
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
