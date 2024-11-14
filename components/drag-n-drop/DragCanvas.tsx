'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import FinderWindow from '../finder-window/FinderWindow';
import SafariWindow from '../SafariWindow';
import { isMobile } from 'react-device-detect';


interface FileItem {
	title: string;
	link?: string;
}

interface File {
	title: string;
	image: string;
	link?: string;
	items?: FileItem[];
}

const files = [
	{
		title: 'Projects',
		image: 'folder',
		items: [
			{
				title: 'Portfolio (Old)',
				link: 'https://portfolio-thecryptochad.vercel.app',
			},
			{
				title: 'DDgle',
				link: 'https://d-dgle.vercel.app',
			},
			{
				title: 'ZeroSum',
				link: 'https://zerosum.moonsama.com',
			},
			{
				title: 'ChadOverflow',
				link: 'https://chad-overflow.vercel.app',
			},
			{
				title: 'Electrician Site',
				link: 'https://electrician-site.vercel.app',
			},
			{
				title: 'Fitness Site',
				link: 'https://fitness-site.vercel.app',
			},
		],
	},
	{
		title: 'Languages',
		image: 'folder',
		items: [
			{ title: 'HTML' },
			{ title: 'CSS' },
			{ title: 'JavaScript' },
			{ title: 'TypeScript' },
			{ title: 'Solidity' },
			{ title: 'Rust' },
			{ title: 'Python' },
		],
	},
	{
		title: 'Frameworks',
		image: 'folder',
		items: [{ title: 'React' }, { title: 'Next.JS' }, { title: 'Nest.JS' }, { title: 'Hardhat.JS' }],
	},
	{
		title: 'Libraries',
		image: 'folder',
		items: [
			{ title: 'tRPC' },
			{ title: 'Tanstack Query' },
			{ title: 'Jotai' },
			{ title: 'Zustand' },
			{ title: 'Zod' },
			{ title: 'TypeORM' },
			{ title: 'Prisma ORM' },
			{ title: 'Mongoose' },
			{ title: 'SubSquid' },
			{ title: 'Ethers.JS' },
			{ title: 'WAGMI' },
			{ title: 'Web3 Modal' },
			{ title: 'Tailwind CSS' },
			{ title: 'Chakra UI' },
			{ title: 'ShadCN' },
		],
	},
	{
		title: 'Databases',
		image: 'folder',
		items: [{ title: 'PostgreSQL' }, { title: 'MySQL' }, { title: 'MongoDB' }],
	},
	{
		title: 'Tools',
		image: 'folder',
		items: [
			{ title: 'Git' },
			{ title: 'Google Cloud' },
			{ title: 'Vercel' },
			{ title: 'Railway' },
			{ title: 'Postman' },
			{ title: 'VS Code' },
			{ title: 'Remix IDE' },
		],
	},
	// {
	// 	title: 'Bio',
	// 	image: 'file',
	// 	link: 'https://www.thecryptochad.com',
	// },
	{
		title: 'CV',
		image: 'file',
		link: 'https://drive.google.com/file/d/1Nuv_YVds6HSWTjR1oSAY1HbVDIZ4HjDm/preview',
	},
];

export default function DragCanvas() {
	const ref = useRef(null);

	return (
		<motion.div
			className='h-[71.5vh] w-[100vw] gap-4 pr-4 pt-4 max-lg:grid max-lg:grid-cols-3 lg:flex lg:h-[86.65vh] lg:flex-col lg:flex-wrap-reverse lg:content-start'
			ref={ref}
		>
			{files.map((file) => {
				const [isOpen, setIsOpen] = useState(false);

				return (
					<Dialog
						key={file.title}
						modal={false}
						open={isOpen}
					>
						<DialogTrigger asChild>
							<motion.div
								className='group flex flex-col items-center gap-1 pt-1 hover:cursor-pointer'
								drag
								dragConstraints={ref}
								dragElastic={false}
								dragMomentum={false}
								onClick={() => setIsOpen(true)}
							>
								<Image
									alt='Folder'
									className='-z-10 size-[20vw] rounded-md border-2 border-transparent p-2 group-hover:border-[#FFFFFF80] group-hover:bg-[#00000080] lg:size-[5vw]'
									height={80}
									src={`/images/${file.image}.webp`}
									width={80}
									onDragStart={(e) => e.preventDefault()}
								/>
								<p className='mx-4 rounded-md text-center text-xs font-bold group-hover:bg-blue-700'>{file.title}</p>
							</motion.div>
						</DialogTrigger>

						<DialogContent className='bg-transparent max-lg:size-full'>
							<motion.div
								className='rounded-lg max-lg:size-full bg-transparent backdrop-blur-3xl'
								drag={!isMobile}
								dragConstraints={ref}
								dragElastic={false}
								dragMomentum={false}
							>
								<DialogTitle></DialogTitle>
								{file?.link ? (
									<SafariWindow
										link={file.link}
										setIsOpen={setIsOpen}
									/>
								) : (
									<FinderWindow
										items={file.items || []}
										ref={ref}
										setIsOpen={setIsOpen}
										title={file.title}
									/>
								)}
							</motion.div>
						</DialogContent>
					</Dialog>
				);
			})}
		</motion.div>
	);
}
