import PropTypes from 'prop-types';
const moment = require('moment');
import React, {useState, useRef, useEffect} from 'react';
import styles from './FormProduct.module.css';
import {convertDateFormat, formatDate, convertDateInputFormat} from '../../helper';
import {useDispatch} from 'react-redux';
import {handleUploadImageAsync, updateProductDetailAsync} from '../../redux/product/action';
import {server} from '../../shared/constant';
import {errorAlert} from '../../components/Notify/Alert';

export const FormProduct = ({handleToggleForm, productDetail, categoryList, showToast}) => {
	FormProduct.propTypes = {
		handleToggleForm: PropTypes.func.isRequired,
		showToast: PropTypes.func.isRequired,
		productDetail: PropTypes.object.isRequired,
		categoryList: PropTypes.array.isRequired,
	};

	const dispatch = useDispatch();

	const [imagePreview, setImagePreview] = useState('');
	const [imageSend, setImageSend] = useState('');
	const [name, setName] = useState('');
	const [unit, setUnit] = useState('');
	const [costPrice, setCostPrice] = useState('');
	const [retailPrice, setRetailPrice] = useState('');
	const [stock, setStock] = useState('');
	const [status, setStatus] = useState('available');
	const [expiredAt, setExpiredAt] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('Drink');

	useEffect(() => {
		if (productDetail) {
			const image = `${server}/v1/asset/product/images/${productDetail.image}`;
			setImagePreview(image);
			const product = productDetail;
			const date = convertDateInputFormat(product.expired_at);
			setName(product.name || '');
			setUnit(product.unit || '');
			setCostPrice(product.cost_price ? product.cost_price.toString() : '');
			setRetailPrice(product.retail_price ? product.retail_price.toString() : '');
			setStock(product.stock ? product.stock.toString() : '');
			setStatus(product.status ? product.status : 'available');
			setExpiredAt(date || '');
			setDescription(product.description || '');
			setCategory(product.category || 'Drink');
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
			image: imageSend,
			costPrice,
			retailPrice,
			stock,
			status,
			category,
			expiredAt,
			description,
		};
		dispatch(handleUploadImageAsync(imageSend, formData, false, true))
			.then((response) => {
				console.log(response);

				console.log('Clear form');
				// Clear the form fields after submission
				setName('');
				setUnit('');
				setCostPrice('');
				setRetailPrice('');
				setStock('');
				setStatus('');
				setExpiredAt('');
				setDescription('');
				setCategory('Drink');
				handleToggleForm();
				showToast('Add new product successfully!');
			})
			.catch((error) => {
				console.log('error in form product', error);
				let errorMessage = '';
				if (imageSend === '') {
					errorMessage = 'Please upload your image!';
				} else if (error.response.data.message) {
					errorMessage = error.response.data.message.split(':')[1].trim();
					if (
						errorMessage.includes('"expired_at" with value') ||
						errorMessage.includes("for column 'expired_at' at row 1")
					) {
						errorMessage = '"expired_at" is invalid';
					}
					let arrayMessage = errorMessage.split(' ');

					//change the variable name to the field name in form
					switch (arrayMessage[0]) {
						case '"name"':
							arrayMessage[0] = '"Name"';
							break;
						case '"unit"':
							arrayMessage[0] = '"Unit"';
							break;
						case '"cost_price"':
							arrayMessage[0] = '"Cost Price"';
							break;
						case '"retail_price"':
							arrayMessage[0] = '"Retail price"';
							break;
						case '"stock"':
							arrayMessage[0] = '"Stock"';
							break;
						case '"expired_at"':
							arrayMessage[0] = '"Expired at"';
							break;
						case '"description"':
							arrayMessage[0] = '"Description"';
							break;
						default:
							break;
					}

					errorMessage = arrayMessage.join(' ');
				}

				errorAlert(errorMessage);
			});
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
			costPrice,
			retailPrice,
			category,
			stock,
			status,
			description,
			expiredAt,
		};
		if (!imageSend) {
			// No upload image
			dispatch(handleUploadImageAsync(productDetail.image, formData, true, false))
				.then((response) => {
					console.log('run then');
					// Clear the form fields after submission
					setName('');
					setUnit('');
					setCostPrice('');
					setRetailPrice('');
					setStock('');
					setStatus('available');
					setCategory('Drink');
					setExpiredAt('');
					setDescription('');
					handleToggleForm(productDetail.id);
					showToast('Update product successfully!');
				})
				.catch((error) => {
					console.log('run error');
					let errorMessage = error.response.data.message.split(':')[1].trim();
					if (
						errorMessage.includes('"expired_at" with value') ||
						errorMessage.includes("for column 'expired_at' at row 1")
					) {
						errorMessage = '"expired_at" is invalid';
					}
					let arrayMessage = errorMessage.split(' ');

					//change the variable name to the field name in form
					switch (arrayMessage[0]) {
						case '"name"':
							arrayMessage[0] = '"Name"';
							break;
						case '"unit"':
							arrayMessage[0] = '"Unit"';
							break;
						case '"cost_price"':
							arrayMessage[0] = '"Cost Price"';
							break;
						case '"retail_price"':
							arrayMessage[0] = '"Retail price"';
							break;
						case '"stock"':
							arrayMessage[0] = '"Stock"';
							break;
						case '"expired_at"':
							arrayMessage[0] = '"Expired at"';
							break;
						case '"description"':
							arrayMessage[0] = '"Description"';
							break;
						default:
							break;
					}

					errorMessage = arrayMessage.join(' ');
					errorAlert(errorMessage);
				});
		} else {
			// Upload image
			dispatch(handleUploadImageAsync(imageSend, formData, true, true))
				.then((response) => {
					// Clear the form fields after submission
					setName('');
					setUnit('');
					setCostPrice('');
					setRetailPrice('');
					setStock('');
					setStatus('available');
					setCategory('Drink');
					setExpiredAt('');
					setDescription('');
					handleToggleForm(productDetail.id);
					showToast('Update product successfully!');
				})
				.catch((error) => {
					let errorMessage = error.response.data.message.split(':')[1].trim();
					if (
						errorMessage.includes('"expired_at" with value') ||
						errorMessage.includes("for column 'expired_at' at row 1")
					) {
						errorMessage = '"expired_at" is invalid';
					}
					let arrayMessage = errorMessage.split(' ');

					//change the variable name to the field name in form
					switch (arrayMessage[0]) {
						case '"name"':
							arrayMessage[0] = '"Name"';
							break;
						case '"unit"':
							arrayMessage[0] = '"Unit"';
							break;
						case '"cost_price"':
							arrayMessage[0] = '"Cost Price"';
							break;
						case '"retail_price"':
							arrayMessage[0] = '"Retail price"';
							break;
						case '"stock"':
							arrayMessage[0] = '"Stock"';
							break;
						case '"expired_at"':
							arrayMessage[0] = '"Expired at"';
							break;
						case '"description"':
							arrayMessage[0] = '"Description"';
							break;
						default:
							break;
					}

					errorMessage = arrayMessage.join(' ');
					errorAlert(errorMessage);
				});
		}
	};

	const handleCloseForm = () => {
		if (productDetail) {
			handleToggleForm(productDetail.id);
		} else {
			handleToggleForm();
		}
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
							required
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Unit: </h2>
						<input
							placeholder="unit ..."
							value={unit}
							onChange={(e) => setUnit(e.target.value)}
							required
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Cost price: </h2>
						<input
							placeholder="cost price ..."
							value={costPrice}
							onChange={(e) => setCostPrice(e.target.value)}
							required
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Retail price: </h2>
						<input
							placeholder="retail price ..."
							value={retailPrice}
							onChange={(e) => setRetailPrice(e.target.value)}
							required
						/>
					</div>

					<div className={styles.formInput}>
						<h2 className={styles.labelInput}>Stock: </h2>
						<input
							placeholder="stock ..."
							value={stock}
							onChange={(e) => setStock(e.target.value)}
							required
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
						<h2 className={styles.labelInput}>Category: </h2>
						<select
							name="category"
							id="category"
							className={styles.categoryDropdown}
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						>
							{categoryList.map((category, index) => (
								<option
									key={index}
									className={styles.categoryDropdownOption}
									value={category}
								>
									{category}
								</option>
							))}
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
							required
						/>
					</div>
				</div>

				<div className={styles.formContainerBottom}>
					<div className={`${styles['formInput']} ${styles.inputDesc}`}>
						<h2 className={styles.labelInput}>Description: </h2>
						<textarea
							className={styles.description}
							placeholder="description ..."
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							required
						/>
					</div>
				</div>

				<div className={styles.formContainerButton}>
					<button
						onClick={() => handleCloseForm()}
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
