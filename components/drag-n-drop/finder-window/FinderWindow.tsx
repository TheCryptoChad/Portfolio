import FinderWindowHeader from './FinderWindowHeader';
import FinderWindowSidebar from './FinderWindowSidebar';
import FinderWindowBody from './FinderWindowBody';

type Props = {
	items: { title: string; link?: string }[];
	ref: React.MutableRefObject<null>;
	setIsOpen: (isOpen: boolean) => void;
	title: string;
};

export default function FinderWindow(props: Props): JSX.Element {
	return (
		<div className='flex size-full flex-col rounded-lg border border-[#7E7673] lg:h-[40vh] lg:w-[30vw]'>
			<FinderWindowHeader
				setIsOpen={props.setIsOpen}
				title={props.title}
			/>

			<div className='flex h-[86.25%] items-center rounded-b-lg'>
				<FinderWindowSidebar />

				<FinderWindowBody
					items={props.items}
					ref={props.ref}
				/>
			</div>
		</div>
	);
}
