import LoadingScreen from '@/components/loading-screen/LoadingScreen';
import DragNDropCanvas from '@/components/drag-n-drop/DragNDropCanvas';

export default async function Home() {
	const f = await fetch('http://localhost:3000/api/webhook', {method: 'POST'})
	return (
		<main className='flex size-full justify-end'>
			<LoadingScreen />

			<DragNDropCanvas />
		</main>
	);
}
