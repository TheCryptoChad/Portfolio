import LoadingScreen from '@/components/LoadingScreen';
import DragCanvas from '@/components/drag-n-drop/DragCanvas';

export default function Home() {
	return (
		<main className='flex size-full justify-end'>
			<LoadingScreen />

			<DragCanvas />
		</main>
	);
}
