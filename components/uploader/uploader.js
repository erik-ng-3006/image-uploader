import React from 'react';
import ImageHolder from './image-holder/image-holder';
import classes from './uploader.module.css';

function Uploader() {
	return (
		<section className={classes.uploader}>
			<h1>Upload your image</h1>
			<p>File should be Jpeg, Png,...</p>
			<ImageHolder />
			<span>Or</span>
			<button>Choose a file</button>
		</section>
	);
}

export default Uploader;
