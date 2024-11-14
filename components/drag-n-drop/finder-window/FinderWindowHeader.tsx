'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, ChevronsRight, Minus, MoveDiagonal2, X } from 'lucide-react';

type Props = {
	title: string;
	setIsOpen: (isOpen: boolean) => void;
};

export default function FinderWindowHeader(props: Props): JSX.Element {
	return (
		<div className='flex h-[13.75%] items-center'>
			<div className='flex h-full w-[35%] items-center gap-2 rounded-tl-lg bg-transparent px-4 backdrop-blur-3xl lg:w-[30%]'>
				<div
					className='flex size-3 cursor-pointer items-center justify-center rounded-full bg-red-500 hover:brightness-150'
					onClick={() => props.setIsOpen(false)}
				>
					<X className='size-2 text-[#00000080]' />
				</div>

				<div className='flex size-3 cursor-pointer items-center justify-center rounded-full bg-yellow-500 hover:brightness-150'>
					<Minus className='size-2 text-[#00000080]' />
				</div>

				<div className='flex size-3 cursor-pointer items-center justify-center rounded-full bg-green-500 hover:brightness-150'>
					<MoveDiagonal2 className='size-2 text-[#00000080]' />
				</div>
			</div>

			<div className='flex h-full w-[65%] items-center justify-between rounded-tr-lg border-b border-l border-b-transparent border-l-black bg-[#28241C] px-2 py-1 transition-colors hover:border-black hover:shadow-custom-hover lg:w-[70%]'>
				<div className='flex items-center gap-1'>
					<ChevronLeft className='h-6 w-6 cursor-pointer rounded-md bg-transparent transition-colors hover:bg-accent/50' />

					<ChevronRight className='h-6 w-6 cursor-pointer rounded-md bg-transparent transition-colors hover:bg-accent/50' />

					<div className='group flex cursor-default items-center gap-1'>
						<Image
							alt='Folder'
							height={15}
							src='/images/folder.webp'
							width={15}
						/>

						<h2 className='text-sm font-bold'>{props.title}</h2>
					</div>
				</div>

				<div className='flex items-center justify-end gap-1'>
					<ChevronsRight className='h-6 w-6 cursor-pointer rounded-md bg-transparent transition-colors hover:bg-accent/50' />

					<Image
						alt='Search'
						className='cursor-pointer rounded-md bg-transparent p-1 transition-colors hover:bg-accent/50'
						height={26}
						src='/icons/search.svg'
						width={26}
					/>
				</div>
			</div>
		</div>
	);
}
