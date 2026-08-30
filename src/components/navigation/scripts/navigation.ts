/* Packages */
import { lazy } from 'react';

/* Scripts */
import { NavigationType } from './navigation-types';

/* Components */
const Home = lazy(() => import('../../../pages/home/Home').then((m) => ({ default: m.Home })));
const DividerLabels = lazy(() => import('../../../pages/mtg/MTG').then((m) => ({ default: m.DividerLabels })));
const DrawerLabels = lazy(() => import('../../../pages/mtg/MTG').then((m) => ({ default: m.DrawerLabels })));
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
		element: DividerLabels,
		isRoute: true,
		label: 'MTG Divider Labels',
		showInNav: true,
		url: '/mtg-divider-labels',
	},
	{
		id: 2,
		element: DrawerLabels,
		isRoute: true,
		label: 'MTG Drawer Labels',
		showInNav: true,
		url: '/mtg-drawer-labels',
	},
	{
		id: 3,
		element: TopLoaders,
		isRoute: true,
		label: 'MTG Top Loaders',
		showInNav: true,
		url: '/mtg-top-loaders',
	},
];
