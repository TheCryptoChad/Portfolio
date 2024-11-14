export const navigationButtons: string[] = ['Finder', 'Edit', 'View', 'Go', 'Window', 'Help'];

export const aboutMe = {
	Experience: '4+ years',
	Location: 'Panama City, PA',
	Interests: 'Crypto, Japan & Cats',
} as const;

export type AboutMeValue = (typeof aboutMe)[keyof typeof aboutMe];

export const socials = {
	LinkedIn: 'https://www.linkedin.com/in/adham-elneser/',
	GitHub: 'https://github.com/TheCryptoChad',
	Twitter: 'https://twitter.com/TheCryptoChad_',
} as const;

export type SocialsValue = (typeof socials)[keyof typeof socials];

export const controls = {
	Sound: '/icons/sound.svg',
	Bluetooth: '/icons/bluetooth.svg',
	Battery: '/icons/battery.svg',
	Wifi: '/icons/wifi.svg',
	Search: '/icons/search.svg',
	'Control Center': '/icons/control-center.svg',
} as const;

export type ControlsValue = (typeof controls)[keyof typeof controls];

export const sidebarItems = {
	Favorites: ['Airdrop', 'Recents', 'Applications', 'Desktop', 'Documents', 'Downloads'],
	iCloud: ['iCloud Drive', 'Shared'],
	Locations: ['Network'],
	Tags: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray'],
} as const;

export type SideBarItemsValue = (typeof sidebarItems)[keyof typeof sidebarItems];

export type File = {
	title: string;
	image: string;
	items?: { title: string; link?: string }[];
	link?: string;
};

export const files: File[] = [
	{
		title: 'Projects',
		image: 'folder',
		items: [
			{
				title: 'Portfolio (Old)',
				link: 'https://portfolio-thecryptochad.vercel.app',
			},
			{
				title: 'DDgle',
				link: 'https://d-dgle.vercel.app',
			},
			{
				title: 'ZeroSum',
				link: 'https://zerosum.moonsama.com',
			},
			{
				title: 'ChadOverflow',
				link: 'https://chad-overflow.vercel.app',
			},
			{
				title: 'Electrician Site',
				link: 'https://electrician-site.vercel.app',
			},
			{
				title: 'Fitness Site',
				link: 'https://fitness-site.vercel.app',
			},
		],
	},
	{
		title: 'Languages',
		image: 'folder',
		items: [
			{ title: 'HTML' },
			{ title: 'CSS' },
			{ title: 'JavaScript' },
			{ title: 'TypeScript' },
			{ title: 'Solidity' },
			{ title: 'Rust' },
			{ title: 'Python' },
		],
	},
	{
		title: 'Frameworks',
		image: 'folder',
		items: [{ title: 'React' }, { title: 'Next.JS' }, { title: 'Nest.JS' }, { title: 'Hardhat.JS' }],
	},
	{
		title: 'Libraries',
		image: 'folder',
		items: [
			{ title: 'tRPC' },
			{ title: 'Tanstack Query' },
			{ title: 'Jotai' },
			{ title: 'Zustand' },
			{ title: 'Zod' },
			{ title: 'TypeORM' },
			{ title: 'Prisma ORM' },
			{ title: 'Mongoose' },
			{ title: 'SubSquid' },
			{ title: 'Ethers.JS' },
			{ title: 'WAGMI' },
			{ title: 'Web3 Modal' },
			{ title: 'Tailwind CSS' },
			{ title: 'Chakra UI' },
			{ title: 'ShadCN' },
		],
	},
	{
		title: 'Databases',
		image: 'folder',
		items: [{ title: 'PostgreSQL' }, { title: 'MySQL' }, { title: 'MongoDB' }],
	},
	{
		title: 'Tools',
		image: 'folder',
		items: [
			{ title: 'Git' },
			{ title: 'Google Cloud' },
			{ title: 'Vercel' },
			{ title: 'Railway' },
			{ title: 'Postman' },
			{ title: 'VS Code' },
			{ title: 'Remix IDE' },
		],
	},
	{
		title: 'CV',
		image: 'file',
		link: 'https://drive.google.com/file/d/1Nuv_YVds6HSWTjR1oSAY1HbVDIZ4HjDm/preview',
	},
];
