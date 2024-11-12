'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import FinderWindow from '../finder-window/FinderWindow';
import SafariWindow from '../SafariWindow';

const files = [
	{
		title: 'Bio',
		image: 'file',
		link: 'https://www.thecryptochad.com',
	},
	{
		title: 'CV',
		image: 'file',
		link: 'https://drive.google.com/file/d/1Nuv_YVds6HSWTjR1oSAY1HbVDIZ4HjDm/preview',
	},
	{
		title: 'Projects',
		image: 'folder',
		items: [
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
];

export default function DragCanvas() {
	const ref = useRef(null);

	return (
		<motion.div
			className='flex h-[86.65vh] w-[100vw] flex-col items-end gap-4 pr-4 pt-4'
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
								className='group flex flex-col items-center gap-1 pt-1'
								drag
								dragConstraints={ref}
								dragElastic={false}
								dragMomentum={false}
								onDoubleClick={() => setIsOpen(true)}
							>
								<Image
									alt='Folder'
									className='-z-10 h-4/5 flex-1 rounded-md border-2 border-transparent p-2 group-hover:border-[#FFFFFF80] group-hover:bg-[#00000080]'
									height={80}
									src={`/icons/${file.image}.png`}
									width={80}
									onDragStart={(e) => e.preventDefault()}
								/>
								<p className='mx-4 rounded-md text-center text-xs font-bold group-hover:bg-blue-700'>{file.title}</p>
							</motion.div>
						</DialogTrigger>

						<DialogContent className='bg-transparent'>
							<motion.div
								className='rounded-lg bg-transparent backdrop-blur-3xl'
								drag
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
