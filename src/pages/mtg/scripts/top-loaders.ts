/* Scripts */
import { TopLoaderType } from './mtg-types';

/* Variables */
const path = '/assets/images/mtg/top-loaders/';
const colorless = 'Colorless';
const land = 'Land';

export const topLoaders: TopLoaderType[] = [
	{
		image: `${path}colorless-01.jpg`,
		title: colorless,
	},
	{
		image: `${path}land-non-basic-01.jpg`,
		subTitle: `(Non-basic)`,
		title: land,
	},
	{
		image: `${path}colorless-01.jpg`,
		title: colorless,
	},
	{
		image: `${path}land-non-basic-01.jpg`,
		subTitle: `(Non-basic)`,
		title: land,
	},
	{
		image: `${path}colorless-01.jpg`,
		title: colorless,
	},
	{
		image: `${path}land-non-basic-01.jpg`,
		subTitle: `(Non-basic)`,
		title: land,
	},
];
