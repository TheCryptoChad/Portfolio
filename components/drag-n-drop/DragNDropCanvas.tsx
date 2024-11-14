'use client';

import Image from 'next/image';
import { MutableRefObject, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import FinderWindow from './finder-window/FinderWindow';
import SafariWindow from './safari-window/SafariWindow';
import { files, File } from '@/lib/constants';

export default function DragNDropCanvas(): JSX.Element {
	const ref: MutableRefObject<null> = useRef(null);

	return (
		<motion.div
			className='h-[71.5vh] w-[100vw] gap-4 pr-4 pt-4 max-lg:grid max-lg:grid-cols-3 lg:flex lg:h-[86.65vh] lg:flex-col lg:flex-wrap-reverse lg:content-start'
			ref={ref}
		>
			{files.map((file: File) => {
				const [isOpen, setIsOpen] = useState<boolean>(false);

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
								onDoubleClick={() => setIsOpen(true)}
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
								className='rounded-lg bg-transparent backdrop-blur-3xl max-lg:size-full'
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
