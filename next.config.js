/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'source.unsplash.com',
				port: '443',
				pathname: '/random/300×300',
			},
		],
	},
};

module.exports = nextConfig;
