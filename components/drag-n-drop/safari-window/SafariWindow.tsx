'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Minus, MonitorSmartphone, MoveDiagonal2, Plus, X } from 'lucide-react';
import { Input } from '../../ui/input';

type Props = {
	link: string;
	setIsOpen: (isOpen: boolean) => void;
};

export default function SafariWindow(props: Props): JSX.Element {
	const [mobilePreview, setMobilePreview] = useState<boolean>(false);

	return (
		<div
			className={`${mobilePreview ? 'w-[30vw]' : 'w-[100dvw]'} flex h-[100dvh] flex-col rounded-lg border border-[#7E7673] bg-[#28241C] lg:h-[100vh]`}
		>
			<div className='flex h-[10%] items-center justify-between border-b border-black px-8 shadow-custom-hover'>
				<div className='flex items-center gap-2'>
					<div className='flex size-full items-center gap-2'>
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

					<div className='flex items-center gap-1 max-lg:hidden'>
						<ChevronLeft className='h-6 w-6 cursor-pointer rounded-md bg-transparent transition-colors hover:bg-accent/50' />

						<ChevronRight className='h-6 w-6 cursor-pointer rounded-md bg-transparent transition-colors hover:bg-accent/50' />
					</div>
				</div>

				<div className='flex w-5/6 items-center justify-center gap-4 lg:w-3/4'>
					<Input
						className='h-8 w-5/6 border-[#FFFFFF80] bg-[#28241C] text-center shadow-custom-hover lg:w-2/5'
						readOnly
						value={props.link}
					/>

					<MonitorSmartphone
						className='h-6 w-6 cursor-pointer rounded-md bg-transparent transition-colors hover:bg-accent/50 max-lg:hidden'
						onClick={() => setMobilePreview(!mobilePreview)}
					/>
				</div>

				<div className='flex items-center gap-2 max-lg:hidden'>
					<Plus className='h-6 w-6 cursor-pointer rounded-md bg-transparent transition-colors hover:bg-accent/50' />

					<Download className='h-6 w-6 cursor-pointer rounded-md bg-transparent transition-colors hover:bg-accent/50' />
				</div>
			</div>

			<iframe
				allow='autoplay; encrypted-media; picture-in-picture'
				className='rounded-b-lg'
				height='90%'
				src={props.link}
				width='100%'
			/>
		</div>
	);
}
