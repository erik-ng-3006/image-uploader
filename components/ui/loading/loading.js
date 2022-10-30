import { Card } from '@mui/material';
import React from 'react';
import classes from './loading.module.css';

function Loading() {
	return (
		<Card className={classes.loading}>
			<h2>Uploading...</h2>
			<div className={classes.bar}>
				<span></span>
			</div>
		</Card>
	);
}

export default Loading;
