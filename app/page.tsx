import LoadingScreen from '@/components/LoadingScreen';
import DragCanvas from '@/components/drag-n-drop/DragCanvas';

export default function Home() {
	return (
		<main className='flex h-[96vh] w-[100vw] justify-end'>
			<LoadingScreen />

			<DragCanvas />
		</main>
	);
}
