import LoadingScreen from '@/components/loading-screen/LoadingScreen';
import DragNDropCanvas from '@/components/drag-n-drop/DragNDropCanvas';

export default function Home(): JSX.Element {
	return (
		<main className='flex size-full justify-end'>
			<LoadingScreen />

			<DragNDropCanvas />
		</main>
	);
}
