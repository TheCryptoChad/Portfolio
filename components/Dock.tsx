import { Separator } from './ui/separator';
import DockItem from './DockItem';

export default function Dock() {
	return (
		<footer className='absolute bottom-2 left-1/2 flex h-16 -translate-x-1/2 items-center justify-between gap-1.5 rounded-2xl bg-[#00000080] px-2 py-1 backdrop-blur-xl'>
			<DockItem
				active
				title='Finder'
			/>

			<Separator
				className='mx-1 bg-slate-400'
				orientation='vertical'
			/>

			<DockItem title='Applications' />
			<DockItem title='Downloads' />
			<DockItem title='Trash' />
		</footer>
	);
}
