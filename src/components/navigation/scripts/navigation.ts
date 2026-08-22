/* Packages */
import { lazy } from 'react';

/* Scripts */
import { NavigationType } from './navigation-types';

/* Components */
const Home = lazy(() => import('../../../pages/home/Home').then((m) => ({ default: m.Home })));
const Labels = lazy(() => import('../../../pages/mtg/MTG').then((m) => ({ default: m.Labels })));
const TopLoaders = lazy(() => import('../../../pages/mtg/MTG').then((m) => ({ default: m.TopLoaders })));

export const navigation: NavigationType[] = [
	{
		id: 0,
		element: Home,
		isRoute: true,
		label: 'Home',
		showInNav: true,
		url: '/',
	},
	{
		id: 1,
		element: Labels,
		isRoute: true,
		label: 'MTG Labels',
		showInNav: true,
		url: '/mtg-labels',
	},
	{
		id: 2,
		element: TopLoaders,
		isRoute: true,
		label: 'MTG Top Loaders',
		showInNav: true,
		url: '/mtg-top-loaders',
	},
];
