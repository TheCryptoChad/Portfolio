import type { Metadata } from 'next';
import Image from 'next/image';
import localFont from 'next/font/local';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import { ReactNode } from 'react';
import Header from '@/components/header/Header';
import Dock from '@/components/dock/Dock';
import './globals.css';

type Props = Readonly<{
	children: ReactNode;
}>;

const geistSans: NextFontWithVariable = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});

const geistMono: NextFontWithVariable = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	applicationName: 'TheCryptoChad Portfolio Website',
	title: 'TheCryptoChad - Portfolio Website',
	description: 'Welcome to TheCryptoChad Portfolio Website. Explore projects, CV, and more about TheCryptoChad.',
	keywords:
		'TheCryptoChad, portfolio, projects, CV, web development, blockchain, crypto, cats, frontend, backend, fullstack, developer, engineer, software, engineer, programmer, coding, programming, development, software, web, website, app, application, blockchain, crypto, cryptocurrency, bitcoin, ethereum, solidity, react, nextjs, tailwindcss, typescript, javascript, nodejs, express, mongodb, postgresql, web3, metamask, ethers, hardhat, ipfs, nft, defi, dapp, smart, contract, blockchain, developer, engineer, software, engineer, programmer, coding, programming, development, software, web, website, app, application, blockchain, crypto, cryptocurrency, bitcoin, ethereum, solidity, react, nextjs, tailwindcss, typescript, javascript, nodejs, express, mongodb, postgresql, web3, metamask, ethers, truffle, hardhat, ipfs, nft, defi, dapp, smart, contract',
	authors: [{ name: 'Adham - TheCryptoChad', url: 'https://www.x.com/@TheCryptoChad_' }],
	openGraph: {
		title: 'TheCryptoChad - Portfolio Website',
		description: 'Welcome to TheCryptoChad Portfolio Website. Explore projects, CV, and more about TheCryptoChad.',
		url: 'https://www.thecryptochad.com',
		type: 'website',
		images: [
			{
				url: 'https://www.thecryptochad.com/images/profile.webp',
				width: 630,
				height: 630,
				alt: 'TheCryptoChad Portfolio Website',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		site: '@TheCryptoChad_',
		title: 'TheCryptoChad - Portfolio Website',
		description: 'Welcome to TheCryptoChad Portfolio Website. Explore projects, CV, and more about TheCryptoChad.',
		images: 'https://www.thecryptochad.com/images/profile.webp',
	},
	robots: 'index, follow',
	themeColor: '#000000',
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
};

export default function RootLayout(props: Props): JSX.Element {
	return (
		<html>
			<body className={`${geistSans.variable} ${geistMono.variable} h-[95svh] overflow-hidden bg-black text-white antialiased`}>
				<Image
					alt='Background'
					className='absolute left-0 top-0 -z-10 size-full object-cover'
					height={1080}
					src='/images/background.webp'
					width={1920}
				/>

				<Header />

				{props.children}

				<Dock />
			</body>
		</html>
	);
}
