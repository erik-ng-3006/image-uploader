import React from 'react';
import classes from './button.module.css';

function Button(props) {
	if (props.type === 'input') {
		return <input type='file' id='image-file' name='image-file' />;
	}

	return (
		<button className={classes.button} onClick={props.onClick}>
			{props.children}
		</button>
	);
}

export default Button;
