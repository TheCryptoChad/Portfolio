import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type Props = {
	title: string;
	active?: boolean;
};

export default function DockItem(props: Props) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger className='flex size-full flex-col items-center gap-1 pt-1'>
					<Image
						alt={props.title}
						className={`${props.title === 'Trash' && 'px-1'} h-4/5 w-full flex-1 hover:brightness-50`}
						height={40}
						src={`/images/${props.title.toLowerCase()}.webp`}
						width={40}
					/>
					<div className={`${props.active ? 'bg-slate-400' : 'bg-transparent'} h-1 w-1 rounded-full`} />
				</TooltipTrigger>
				<TooltipContent className='mb-2 border-black bg-[#00000080] text-white backdrop-blur-xl'>
					{props.title}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
