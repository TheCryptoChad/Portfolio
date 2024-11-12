import type { Metadata } from 'next';
import Image from 'next/image';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header/Header';
import Dock from '@/components/dock/Dock';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'TheCryptoChad',
	description: 'TheCryptoChad Portfolio Website',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} overflow-hidden bg-black text-white antialiased`}>
				<Image
					alt='Background'
					className='absolute left-0 top-0 -z-10 h-[100vh] w-[100vw] object-cover'
					height={1080}
					src='/images/background.jpg'
					width={1920}
				/>
				<Header />
				{children}
				<Dock />
			</body>
		</html>
	);
}
