import Image from 'next/image';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '../ui/button';
import AboutMe from './AboutMe';
import { navigationButtons } from '@/lib/constants';

export default function Navigation(): JSX.Element {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<Image
							alt='Logo'
							height={20}
							src='/logo.svg'
							width={20}
						/>
					</NavigationMenuTrigger>

					<NavigationMenuContent className='z-50 lg:min-w-[20vw]'>
						<AboutMe />
					</NavigationMenuContent>
				</NavigationMenuItem>

				{navigationButtons.map((button: string) => (
					<NavigationMenuItem
						key={button}
						className='max-lg:hidden'
					>
						<Button className={`${button === 'Finder' && 'font-extrabold'} ${navigationMenuTriggerStyle()}`}>{button}</Button>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
