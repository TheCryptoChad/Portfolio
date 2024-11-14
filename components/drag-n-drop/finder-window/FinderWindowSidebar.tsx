import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../../ui/collapsible';
import { ScrollArea } from '../../ui/scroll-area';
import { sidebarItems, SideBarItemsValue } from '@/lib/constants';

export default function FinderWindowSidebar(): JSX.Element {
	return (
		<ScrollArea className='flex h-full w-[35%] flex-col rounded-bl-lg bg-transparent pl-2 pr-1 backdrop-blur-3xl lg:w-[30%]'>
			{Object.entries(sidebarItems).map(([key, values]: [string, SideBarItemsValue]) => (
				<Collapsible
					key={key}
					className='group/collapsible group mb-2'
					defaultOpen
				>
					<div className='w-full pl-2 pr-1'>
						<CollapsibleTrigger className='flex w-full items-center justify-between text-xs font-extrabold text-white'>
							{key}

							<ChevronDown className='ml-auto -rotate-90 text-transparent transition-all group-hover:text-white group-data-[state=open]/collapsible:rotate-0' />
						</CollapsibleTrigger>

						<CollapsibleContent>
							{values.map((value: string) => (
								<div
									key={value}
									className='-ml-2 flex cursor-pointer items-center gap-2 rounded-md bg-transparent py-1 pl-2 transition-colors hover:bg-accent/50'
								>
									{key === 'Tags' ? (
										<div className={`bg-${value.toLowerCase()}-500 size-2 rounded-full`} />
									) : (
										<Image
											alt={value}
											height={15}
											src='/images/folder.webp'
											width={15}
										/>
									)}

									<p className='text-sm'>{value}</p>
								</div>
							))}
						</CollapsibleContent>
					</div>
				</Collapsible>
			))}
		</ScrollArea>
	);
}
