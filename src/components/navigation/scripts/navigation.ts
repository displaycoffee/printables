/* Scripts */
import type { NavigationMapType } from './navigation-types';
import { navigationUtils } from './navigation-utils';

const { create } = navigationUtils;

export const navigationHeader: NavigationMapType = {
	...create({ key: 'index', label: 'Home', url: '/' }),
	...create({ key: 'mtg-divider-labels', label: 'MTG Divider Labels' }),
	...create({ key: 'mtg-drawer-labels', label: 'MTG Drawer Labels' }),
	...create({ key: 'mtg-top-loaders', label: 'MTG Top Loaders' }),
};
