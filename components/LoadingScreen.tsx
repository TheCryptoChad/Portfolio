'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

export default function LoadingScreen() {
	const [progress, setProgress] = useState<number>(0);
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		const interval = setInterval(() => setProgress((prev) => (prev < 100 ? prev + 1 : 100)), 30);
		const timeout = setTimeout(() => setShow(false), 3500);

		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	}, []);

	return (
		<div
			className={`${!show && 'hidden'} absolute left-0 top-0 z-50 flex h-[100vh] w-[100vw] flex-col items-center justify-around bg-black text-white`}
		>
			<Image
				alt='Logo'
				height={200}
				src='/logo.svg'
				width={200}
			/>
			<Progress
				className='w-1/4'
				value={progress}
			/>
		</div>
	);
}
