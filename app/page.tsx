import LoadingScreen from '@/components/loading-screen/LoadingScreen';
import DragNDropCanvas from '@/components/drag-n-drop/DragNDropCanvas';

export default async function Home() {
	const a = await fetch('http://localhost:3000/api/webhook', {
		method: 'POST',
		body: JSON.stringify({
			type: 'new_coin',
			message: 'Zerbro was just listed on Binance!',
			currency: 'ZEREBRO',
			exchange: 'Binance',
		}),
	}).then((res) => res.json());
	return (
		<main className='flex size-full justify-end'>
			<LoadingScreen />

			<DragNDropCanvas />
		</main>
	);
}
