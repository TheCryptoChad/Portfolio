'use client';

import { useState, useEffect } from 'react';
import { navigationMenuTriggerStyle } from './ui/navigation-menu';

const options: Intl.DateTimeFormatOptions = {
	weekday: 'short',
	month: 'short',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	hour12: true,
};

export default function DateTime() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setCurrentTime(new Date()), 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className={navigationMenuTriggerStyle() + ' cursor-pointer'}>
			{currentTime.toLocaleString('en-US', options)}
		</div>
	);
}
