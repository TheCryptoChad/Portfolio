import Navigation from './Navigation';
import Controls from './Controls';

export default function Header() {
	return (
		<header className='flex w-[100vw] items-center justify-between bg-[#00000080] px-1 backdrop-blur-xl'>
			<Navigation />

			<Controls />
		</header>
	);
}
