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
	title: 'TheCryptoChad',
	description: 'TheCryptoChad Portfolio Website',
};

export default function RootLayout(props: Props): JSX.Element {
	return (
		<html
			lang='en'
		>
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
