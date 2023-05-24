import React, {useRef, useState} from 'react';
import './FormProduct.css';

export const FormProduct = () => {
	const [imagePreview, setImagePreview] = useState('');
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
	return (
		<div className="formProduct">
			<div className="formContainer">
				<div className="formContainerTop">
					<div className="inputImageContainer" onClick={handleImageClick}>
						<div className="inputImage">
							{imagePreview ? (
								<img src={imagePreview} alt="Image Preview" />
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

				<div className="formContainerCenter">
					<div className="formInput">
						<input placeholder="id ..." />
					</div>

					<div className="formInput">
						<input placeholder="name ..." />
					</div>

					<div className="formInput">
						<input placeholder="unit ..." />
					</div>

					<div className="formInput">
						<input placeholder="unit price ..." />
					</div>

					<div className="formInput">
						<input placeholder="stock ..." />
					</div>

					<div className="formInput">
						<input placeholder="status ..." />
					</div>

					<div className="formInput">
						<input placeholder="expired at ..." />
					</div>
				</div>

				<div className="formContainerBottom ">
					<div className="formInput inputDesc">
						<input placeholder="description ..." />
					</div>
				</div>

				<div className="formContainerButton">
					<button className="btn btnClose">Close</button>

					<button className="btn btnSave">Save</button>
				</div>
			</div>
		</div>
	);
};
