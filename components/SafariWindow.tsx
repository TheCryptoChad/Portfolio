import { ChevronLeft, ChevronRight, Download, Minus, MoveDiagonal2, Plus, X } from 'lucide-react';
import { Input } from './ui/input';

type Props = {
	link: string;
	setIsOpen: (isOpen: boolean) => void;
};

export default function SafariWindow(props: Props) {
	return (
		<div className='flex h-[80vh] w-[60vw] flex-col rounded-lg border border-[#7E7673] bg-[#28241C]'>
			<div className='flex h-[13.75%] items-center justify-between border-b border-black px-8 shadow-custom-hover'>
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
					<div className='flex items-center gap-1'>
						<ChevronLeft className='h-6 w-6 cursor-pointer rounded-md bg-transparent transition-colors hover:bg-accent/50' />
						<ChevronRight className='h-6 w-6 cursor-pointer rounded-md bg-transparent transition-colors hover:bg-accent/50' />
					</div>
				</div>

				<Input
					className='h-8 w-1/3 border-[#FFFFFF80] bg-[#28241C] text-center shadow-custom-hover'
					readOnly
					value={props.link}
				/>

				<div className='flex items-center gap-2'>
					<Plus className='h-6 w-6 cursor-pointer rounded-md bg-transparent transition-colors hover:bg-accent/50' />
					<Download className='h-6 w-6 cursor-pointer rounded-md bg-transparent transition-colors hover:bg-accent/50' />
				</div>
			</div>

			<iframe
				allow='autoplay; encrypted-media; picture-in-picture'
				className='rounded-b-lg'
				height='86.25%'
				src={props.link}
				width='100%'
			/>
		</div>
	);
}
