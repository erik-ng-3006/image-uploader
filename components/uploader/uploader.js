import React from 'react';
import Button from '../ui/button/button';
import Card from '../ui/card/card';
import ImageHolder from './image-holder/image-holder';
import classes from './uploader.module.css';

function Uploader() {
	return (
		<Card className={classes.uploader}>
			<h1>Upload your image</h1>
			<p>File should be Jpeg, Png,...</p>
			<ImageHolder />
			<span>Or</span>
			<Button type='input' />
		</Card>
	);
}

export default Uploader;
