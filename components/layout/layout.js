import React from 'react';
import Footer from './footer/footer';
import classes from './layout.module.css';
function Layout(props) {
	return (
		<>
			<main className={classes.main}>{props.children}</main>
			<Footer />
		</>
	);
}

export default Layout;
