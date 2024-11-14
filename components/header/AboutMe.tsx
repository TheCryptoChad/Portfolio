import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';
import { aboutMe, AboutMeValue, socials, SocialsValue } from '@/lib/constants';

export default function AboutMe(): JSX.Element {
	return (
		<div className='flex flex-col items-center justify-between gap-5 rounded-lg border border-[#7E7673] bg-[#28241C] px-4 pb-2 pt-4 text-white max-lg:h-[82.5dvh] max-lg:w-[98dvw] lg:pt-12'>
			<div className='flex flex-col items-center gap-2'>
				<Image
					alt='Profile'
					className='rounded-full border-2'
					height={150}
					src='/images/profile.webp'
					width={150}
				/>

				<div className='text-center'>
					<h1 className='text-2xl font-extrabold lg:text-xl'>Adham - TheCryptoChad</h1>

					<h2 className='text-lg lg:text-xs'>Full-Stack Blockchain Developer</h2>
				</div>
			</div>

			<div className='grid gap-x-2 text-lg max-lg:gap-y-2 max-lg:text-center lg:grid-cols-2 lg:text-xs'>
				{Object.entries(aboutMe).map(([key, value]: [string, AboutMeValue]) => (
					<Fragment key={key}>
						<p className='font-extrabold max-lg:-mb-4 lg:text-end'>{key}</p>

						<p className='text-gray-500'>{value}</p>
					</Fragment>
				))}
			</div>

			<div className='flex flex-col items-center gap-2'>
				<div className='flex items-center gap-2'>
					{Object.entries(socials).map(([key, value]: [string, SocialsValue]) => (
						<Link
							key={key}
							className='flex items-center justify-center rounded-full border border-transparent hover:border-white hover:bg-white'
							href={value}
							target='_blank'
						>
							<Image
								alt={key}
								className='object-fit size-6 rounded-full hover:invert'
								height={200}
								src={`/icons/${key.toLowerCase()}.svg`}
								width={200}
							/>
						</Link>
					))}
				</div>

				<p className='text-center text-xs text-gray-500'>
					&copy; 2024 Adham - TheCryptoChad.
					<br />
					All Rights Reserved.
				</p>
			</div>
		</div>
	);
}
