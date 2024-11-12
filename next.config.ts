import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'zerosum.moonsama.com',
        port: '',
				pathname: '/*',
			},
			{
				protocol: 'https',
				hostname: 'd-dgle.vercel.app',
        port: '',
				pathname: '/*',
			},
			{
				protocol: 'https',
				hostname: 'chad-overflow.vercel.app',
        port: '',
				pathname: '/*',
			},
			{
				protocol: 'https',
				hostname: 'electrician-site.vercel.app',
        port: '',
				pathname: '/*',
			},
			{
				protocol: 'https',
				hostname: 'fitness-site.vercel.app',
        port: '',
				pathname: '/*',
			},
		],
	},
};

export default nextConfig;
