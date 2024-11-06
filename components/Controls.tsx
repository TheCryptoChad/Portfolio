import Image from 'next/image';
import { navigationMenuTriggerStyle } from './ui/navigation-menu';
import DateTime from './DateTime';

const controls = {
	Sound: '/icons/sound.svg',
	Bluetooth: '/icons/bluetooth.svg',
	Battery: '/icons/battery.svg',
	Wifi: '/icons/wifi.svg',
	Search: '/icons/search.svg',
	'Control Center': '/icons/control-center.svg',
} as const;

export default function Controls() {
	return (
		<div className='flex flex-1 list-none items-center justify-end'>
			{Object.entries(controls).map(([name, src]) => (
				<Image
					key={name}
					alt={name}
					className={navigationMenuTriggerStyle() + ' cursor-pointer py-1.5'}
					height={20}
					src={src}
					width={20}
				/>
			))}

			<DateTime />
		</div>
	);
}
