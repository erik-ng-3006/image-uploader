import multer from 'multer';
import path from 'path';
import nc from 'next-connect';

const upload = multer({
	storage: multer.diskStorage({
		destination: './public/uploads',
		filename: (req, file, cb) =>
			cb(null, Date.now() + path.extname(file.originalname)),
	}),
});

const handler = nc({
	onError(error, req, res) {
		res.status(501).json({
			error: `Sorry something Happened! ${error.message}`,
		});
	},
	onNoMatch(req, res) {
		res.status(404).json({ error: `Method ${req.method} is not allowed` });
	},
});

handler.use(upload.single('image-file'));

handler.post((req, res) => {
	res.status(200).json(req.file);
});

export default handler;

export const config = {
	api: {
		bodyParser: false,
	},
};
