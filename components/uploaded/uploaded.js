import React from 'react';
import Card from '../ui/card/card';
import classes from './uploaded.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import Button from '../ui/button/button';
import { useRef } from 'react';

function Uploaded(props) {
	const linkInputRef = useRef('some-value');

	function copyButtonClickHandler() {
		navigator.clipboard.writeText(linkInputRef.current.value);
	}
	function closeButtonClickHandler() {
		props.toggleUploaded();
	}
	return (
		<Card className={classes.uploaded}>
			<div
				className={classes['btn-close']}
				onClick={closeButtonClickHandler}
			>
				&#8592;
			</div>
			<CheckCircleIcon />
			<h1>Uploaded Successfully!</h1>
			<Image
				src={props.path}
				width={340}
				height={225}
				alt='uploaded image'
			/>
			<input type='text' value={props.link} disabled ref={linkInputRef} />
			<Button onClick={copyButtonClickHandler}>Copy Link</Button>
		</Card>
	);
}

export default Uploaded;
