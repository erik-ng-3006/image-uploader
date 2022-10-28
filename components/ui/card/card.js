import React from 'react';
import classes from './card.module.css';

function Card(props) {
	const styles = `${classes.card} ${props.className}`;
	return <section className={styles}>{props.children}</section>;
}

export default Card;
