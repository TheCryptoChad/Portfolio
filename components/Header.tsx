import Navigation from './Navigation';
import Controls from './Controls';

export default function Header() {
	return (
		<header className='flex w-[100vw] items-center justify-between bg-[#000000A0] px-1'>
			<Navigation />

			<Controls />
		</header>
	);
}
