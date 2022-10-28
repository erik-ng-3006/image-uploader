import React from 'react';
import classes from './button.module.css';

function Button(props) {
	if (props.type === 'input') {
		return (
			<div className={classes.input}>
				<input type='file' id='image-file' name='image-file' />
				<label htmlFor='image-file'>Choose a file</label>
			</div>
		);
	}

	return (
		<button className={classes.button} onClick={props.onClick}>
			{props.children}
		</button>
	);
}

export default Button;
