import Image from 'next/image';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const navigationButtons: string[] = ['Finder', 'Edit', 'View', 'Go', 'Window', 'Help'];

export default function Navigation() {
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
					<NavigationMenuItem key={button}>
						<NavigationMenuTrigger className={button === 'Finder' ? 'font-extrabold' : ''}>
							{button}
						</NavigationMenuTrigger>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
