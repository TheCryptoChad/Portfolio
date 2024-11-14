'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { navigationMenuTriggerStyle } from '../ui/navigation-menu';

export default function DateTime(): JSX.Element {
	const [currentTime, setCurrentTime] = useState(format(new Date(), 'EEE, MMM d, h:mm a'));

	useEffect(() => {
		const timer: NodeJS.Timeout = setInterval(() => setCurrentTime(format(new Date(), 'EEE, MMM d, h:mm a')), 1000);

		return () => clearInterval(timer);
	}, []);

	return <div className={navigationMenuTriggerStyle() + ' cursor-pointer'}>{currentTime}</div>;
}
