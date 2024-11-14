import Image from 'next/image';
import { navigationMenuTriggerStyle } from '../ui/navigation-menu';
import DateTime from './DateTime';
import { controls, ControlsValue } from '@/lib/constants';

export default function Controls(): JSX.Element {
	return (
		<div className='flex flex-1 list-none items-center justify-end'>
			{Object.entries(controls).map(([key, value]: [string, ControlsValue]) => (
				<Image
					key={key}
					alt={key}
					className={`${navigationMenuTriggerStyle()} cursor-pointer py-1.5 max-lg:hidden`}
					height={20}
					src={value}
					width={20}
				/>
			))}

			<DateTime />
		</div>
	);
}
