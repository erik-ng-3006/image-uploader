import React from 'react';
import Card from '../ui/card/card';
import classes from './uploaded.module.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import Button from '../ui/button/button';
import { useRef } from 'react';

function Uploaded(props) {
	const linkInputRef = useRef('some-value');

	function copyButtonHandler() {
		navigator.clipboard.writeText(linkInputRef.current.value);
	}
	console.log(props.link);
	console.log(props.path);
	return (
		<Card className={classes.uploaded}>
			<CheckCircleIcon />
			<h1>Uploaded Successfully!</h1>
			<Image
				src={props.path}
				width={340}
				height={225}
				alt='uploaded image'
			/>
			<input type='text' value={props.link} disabled ref={linkInputRef} />
			<Button onClick={copyButtonHandler}>Copy Link</Button>
		</Card>
	);
}

export default Uploaded;
