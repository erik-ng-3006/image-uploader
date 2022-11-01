import React from 'react';
import classes from './button.module.css';

function Button(props) {
	function onChangeHandler(event) {
		if (!event.target.files?.length) {
			return;
		}

		const formData = new FormData();

		Array.from(event.target.files).forEach((file) => {
			formData.append(event.target.name, file);
			props.setImage((prev) => {
				return {
					...prev,
					link: URL.createObjectURL(file),
				};
			});
		});

		props.onChange(formData);
	}

	if (props.type === 'input') {
		return (
			<form className={classes.input}>
				<input
					onChange={onChangeHandler}
					type='file'
					id='image-file'
					name='image-file'
					accept='image/*'
				/>
				<label htmlFor='image-file'>Choose a file</label>
			</form>
		);
	}

	return (
		<button className={classes.button} onClick={props.onClick}>
			{props.children}
		</button>
	);
}

export default Button;
