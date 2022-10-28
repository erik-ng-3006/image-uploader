import React from 'react';
import Footer from './footer/footer';

function Layout(props) {
	return (
		<>
			<main>{props.children}</main>
			<Footer />
		</>
	);
}

export default Layout;
