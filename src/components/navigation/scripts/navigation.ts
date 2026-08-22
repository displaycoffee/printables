/* Packages */
import { lazy } from 'react';

/* Scripts */
import { NavigationType } from './navigation-types';

/* Components */
const Labels = lazy(() => import('../../../pages/labels/Labels').then((m) => ({ default: m.Labels })));
const TopLoaders = lazy(() => import('../../../pages/top-loaders/TopLoaders').then((m) => ({ default: m.TopLoaders })));

export const navigation: NavigationType[] = [
	{
		id: 0,
		element: Labels,
		isRoute: true,
		label: 'Labels',
		showInNav: true,
		url: '/',
	},
	{
		id: 1,
		element: TopLoaders,
		isRoute: true,
		label: 'Top Loaders',
		showInNav: true,
		url: '/',
	},
];
