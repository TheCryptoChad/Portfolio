import LoadingScreen from '@/components/loading-screen/LoadingScreen';
import DragNDropCanvas from '@/components/drag-n-drop/DragNDropCanvas';

export default async function Home() {
	return (
		<main className='flex size-full justify-end'>
			<LoadingScreen />

			<DragNDropCanvas />
		</main>
	);
}
