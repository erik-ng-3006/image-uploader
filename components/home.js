import React, { useState } from 'react';
import Loading from './ui/loading/loading';
import Uploaded from './uploaded/uploaded';
import Uploader from './uploader/uploader';

function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [isUploaded, setIsUploaded] = useState(false);
	const [image, setImage] = useState({
		link: '',
		path: '',
	});

	function toggleLoadingHandler() {
		setIsLoading((prev) => !prev);
	}

	function toggleUploadedHandler() {
		setIsUploaded((prev) => !prev);
	}

	return (
		<>
			{!isLoading && !isUploaded && (
				<Uploader
					toggleLoading={toggleLoadingHandler}
					toggleUploaded={toggleUploadedHandler}
					setImage={setImage}
				/>
			)}
			{isLoading && <Loading />}
			{!isLoading && isUploaded && (
				<Uploaded
					link={image.link}
					path={image.path}
					toggleUploaded={toggleUploadedHandler}
				/>
			)}
		</>
	);
}

export default Home;
