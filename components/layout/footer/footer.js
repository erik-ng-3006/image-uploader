import React from 'react';
import classes from './footer.module.css';
function Footer() {
	return (
		<footer className={classes.footer}>
			<p>
				created by{' '}
				<a
					href='https://github.com/erik-ng-3006/image-uploader'
					target='_blank'
				>
					erik-ng-3006
				</a>{' '}
				- devChallenges.io
			</p>
		</footer>
	);
}

export default Footer;
