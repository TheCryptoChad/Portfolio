'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../../ui/dialog';
import { ScrollArea, ScrollBar } from '../../ui/scroll-area';
import SafariWindow from '../safari-window/SafariWindow';

type Props = {
	items: { title: string; link?: string }[];
	ref: React.MutableRefObject<null>;
};

export default function FinderWindowBody(props: Props): JSX.Element {
	return (
		<ScrollArea className='h-full w-[65%] lg:w-[70%]'>
			<div className='grid size-full grid-flow-col grid-rows-2 gap-3 rounded-br-lg border-l border-l-black bg-[#28241C] p-5'>
				{props.items.map((item: { title: string; link?: string }) => {
					const [isOpen, setIsOpen] = useState<boolean>(false);

					return (
						<Dialog
							key={item.title}
							modal={false}
							open={isOpen}
						>
							<DialogTrigger asChild>
								<div
									key={item.title}
									className={`${item.link && 'hover:cursor-pointer'} group flex size-full flex-col items-center justify-center gap-1`}
									onDoubleClick={() => setIsOpen(true)}
								>
									<Image
										alt={item.title}
										className='size-[20vw] rounded-md p-2 group-hover:bg-[#FFFFFF50] lg:size-[5vw]'
										height={60}
										onDragStart={(e) => e.preventDefault()}
										src={item.link ? `${item.link}/favicon.ico` : `/images/${item.title.toLowerCase().replace(' ', '-')}.webp`}
										width={60}
									/>

									<p className='mx-4 text-nowrap rounded-md text-center text-xs font-bold group-hover:bg-blue-700'>{item.title}</p>
								</div>
							</DialogTrigger>

							{item.link && (
								<DialogContent className='bg-transparent'>
									<motion.div
										className='rounded-lg bg-transparent backdrop-blur-3xl'
										drag
										dragConstraints={props.ref}
										dragElastic={false}
										dragMomentum={false}
									>
										<DialogTitle></DialogTitle>

										<SafariWindow
											link={item.link}
											setIsOpen={setIsOpen}
										/>
									</motion.div>
								</DialogContent>
							)}
						</Dialog>
					);
				})}
			</div>

			<ScrollBar orientation='horizontal' />
		</ScrollArea>
	);
}
