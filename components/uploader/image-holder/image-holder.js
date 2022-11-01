import React from 'react';
import Image from 'next/image';
import classes from './image-holder.module.css';

function ImageHolder() {
	return (
		<div className={classes.holder}>
			<Image
				alt='uploaded image'
				src='/img/image.svg'
				width={115}
				height={90}
			/>
			<h2>Drag & Drop your image here</h2>
		</div>
	);
}

export default ImageHolder;
