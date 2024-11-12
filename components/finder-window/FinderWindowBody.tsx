import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';
import { useState } from 'react';
import SafariWindow from '../SafariWindow';

type Props = {
	items: { title: string; link: string }[];
	ref: React.MutableRefObject<null>;
};

export default function FinderWindowBody(props: Props) {
	return (
		<div className='grid h-full w-[70%] grid-cols-3 gap-5 rounded-br-lg border-l border-l-black bg-[#28241C] p-5'>
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
								className='group flex size-full flex-col items-center gap-1 pt-1'
								onDoubleClick={() => setIsOpen(true)}
							>
								<Image
									alt={item.title}
									className='h-4/5 flex-1 rounded-md p-2 group-hover:bg-[#FFFFFF50]'
									height={60}
									onDragStart={(e) => e.preventDefault()}
									src={`${item.link}/favicon.ico`}
									width={60}
								/>
								<p className='mx-4 rounded-md text-center text-xs font-bold group-hover:bg-blue-700'>{item.title}</p>
							</div>
						</DialogTrigger>
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
					</Dialog>
				);
			})}
		</div>
	);
}
