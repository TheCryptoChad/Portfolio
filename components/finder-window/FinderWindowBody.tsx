import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import { useState } from 'react';
import SafariWindow from '../SafariWindow';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

type Props = {
	items: { title: string; link?: string }[];
	ref: React.MutableRefObject<null>;
};

export default function FinderWindowBody(props: Props) {
	return (
		<ScrollArea className='h-full w-[70%]'>
			<div className='grid size-full grid-flow-col grid-rows-2 gap-x-3 rounded-br-lg border-l border-l-black bg-[#28241C] p-5'>
				{props.items.map((item) => {
					const [isOpen, setIsOpen] = useState(false);
					return (
						<Dialog
							key={item.title}
							modal={false}
							open={isOpen}
						>
							<DialogTrigger asChild>
								<div
									key={item.title}
									className={`${item.link && 'hover:cursor-pointer'} group flex size-full flex-col items-center gap-1`}
									onDoubleClick={() => setIsOpen(true)}
								>
									<Image
										alt={item.title}
										className='h-[5vw] w-[5vw] rounded-md p-2 group-hover:bg-[#FFFFFF50]'
										height={60}
										onDragStart={(e) => e.preventDefault()}
										src={
											item.link
												? `${item.link}/favicon.ico`
												: `/images/${item.title.toLowerCase().replace(' ', '-')}.webp`
										}
										width={60}
									/>
									<p className='mx-4 text-nowrap rounded-md text-center text-xs font-bold group-hover:bg-blue-700'>
										{item.title}
									</p>
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
