import { Separator } from '../ui/separator';
import DockItem from './DockItem';

export default function Dock(): JSX.Element {
	return (
		<footer className='absolute bottom-2 left-1/2 flex h-16 -translate-x-1/2 items-center justify-between gap-1.5 rounded-2xl bg-[#00000080] px-2 py-1 backdrop-blur-xl max-lg:w-3/4'>
			<DockItem
				active
				title='Finder'
			/>

			<DockItem
				active
				title='Safari'
			/>

			<Separator
				className='mx-1 h-12 bg-slate-400'
				orientation='vertical'
			/>

			<DockItem title='Applications' />

			<DockItem title='Downloads' />

			<DockItem title='Trash' />
		</footer>
	);
}
