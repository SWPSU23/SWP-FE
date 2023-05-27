import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchQuery} from '../../redux/action';
import './FormSearch.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const FormSearch = () => {
	const searchQuery = useSelector((state) => state.user.searchQuery);
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState(searchQuery);

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setSearchQuery(inputValue));
		setInputValue('');
		// Perform search action
		console.log(inputValue);
	};

	return (
		<form className="form-field" onSubmit={handleSubmit}>
			<div>
				<input
					className="form-input"
					type="text"
					value={inputValue}
					onChange={handleChange}
					placeholder="Search..."
				/>
				<button className="btn" type="submit">
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</div>
		</form>
	);
};

export default FormSearch;
