import Image from 'next/image';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { navigationButtons } from '@/lib/constants';

export default function Navigation():JSX.Element {
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
				</NavigationMenuItem>

				{navigationButtons.map((button: string) => (
					<NavigationMenuItem
						key={button}
						className='max-lg:hidden'
					>
						<NavigationMenuTrigger className={button === 'Finder' ? 'font-extrabold' : ''}>{button}</NavigationMenuTrigger>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
