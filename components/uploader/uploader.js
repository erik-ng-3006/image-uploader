import React from 'react';
import Button from '../ui/button/button';
import Card from '../ui/card/card';
import ImageHolder from './image-holder/image-holder';
import classes from './uploader.module.css';

function Uploader(props) {
	async function fileInputChangeHandler(formData) {
		props.toggleLoading();
		const res = await fetch('/api/uploads', {
			method: 'POST',
			body: formData,
		});

		const data = await res.json();

		console.log(data);
		if (!res.ok) {
			throw new Error({
				message: data.message || 'Something went wrong!',
			});
		}

		props.setImage((prev) => {
			return {
				...prev,
				path: data.path.replace('public', ''),
			};
		});
		props.toggleLoading();
		props.toggleUploaded();
	}

	return (
		<Card className={classes.uploader}>
			<h1>Upload your image</h1>
			<p>File should be Jpeg, Png,...</p>
			<ImageHolder />
			<span>Or</span>
			<Button
				type='input'
				onChange={fileInputChangeHandler}
				setImage={props.setImage}
			/>
		</Card>
	);
}

export default Uploader;
