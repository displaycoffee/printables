/* Packages */
import { lazy } from 'react';

/* Scripts */
import { NavigationType } from './navigation-types';

/* Components */
const Labels = lazy(() => import('../../../pages/labels/Labels').then((m) => ({ default: m.Labels })));

export const navigation: NavigationType[] = [
	{
		id: 0,
		element: Labels,
		isRoute: true,
		label: 'Labels',
		showInNav: true,
		url: '/',
	},
];
