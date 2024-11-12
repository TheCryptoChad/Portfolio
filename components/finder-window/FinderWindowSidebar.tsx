import Image from 'next/image';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

const sidebarItems = {
	Favorites: ['Airdrop', 'Recents', 'Applications', 'Desktop', 'Documents', 'Downloads'],
	iCloud: ['iCloud Drive', 'Shared'],
	Locations: ['Network'],
	Tags: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray'],
};

export default function FinderWindowSidebar() {
	return (
		<ScrollArea className='flex h-full w-[30%] flex-col rounded-bl-lg bg-transparent pl-2 pr-1 backdrop-blur-3xl'>
			{Object.entries(sidebarItems).map(([label, items]) => (
				<Collapsible
					key={label}
					className='group/collapsible group mb-2'
					defaultOpen
				>
					<div className='w-full pl-2 pr-1'>
						<CollapsibleTrigger className='flex w-full items-center justify-between text-xs font-medium text-[#746866]'>
							{label}
							<ChevronDown className='ml-auto -rotate-90 text-transparent transition-all group-hover:text-[#746866] group-data-[state=open]/collapsible:rotate-0' />
						</CollapsibleTrigger>

						<CollapsibleContent>
							{items.map((item) => (
								<div
									key={item}
									className='-ml-2 flex cursor-pointer items-center gap-2 rounded-md bg-transparent py-1 pl-2 transition-colors hover:bg-accent/50'
								>
									{label === 'Tags' ? (
										<div className={`bg-${item.toLowerCase()}-500 size-2 rounded-full`} />
									) : (
										<Image
											alt={item}
											height={15}
											src={`/icons/folder.png`}
											width={15}
										/>
									)}
									<p className='text-sm'>{item}</p>
								</div>
							))}
						</CollapsibleContent>
					</div>
				</Collapsible>
			))}
		</ScrollArea>
	);
}
