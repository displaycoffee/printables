/* Scripts */
import { TopLoaderType, TopLoaderConfigType } from './mtg-types';

/* Variables */
const path = '/assets/images/mtg/top-loaders/';
const config: { [key: string]: TopLoaderConfigType } = {
	white: {
		files: [`01`, `02`, `03`, `04`, `05`, `06`, `07`, `08`, `09`],
		path: `${path}plains-`,
		title: `White`,
	},
	blue: {
		files: [`01`, `02`, `03`, `04`, `05`, `06`, `07`, `08`, `09`],
		path: `${path}island-`,
		title: `Blue`,
	},
	black: {
		files: [`01`, `02`, `03`, `04`, `05`, `06`, `07`, `08`, `09`],
		path: `${path}swamp-`,
		title: `Black`,
	},
	red: {
		files: [`01`, `02`, `03`, `04`, `05`, `06`, `07`, `08`, `09`],
		path: `${path}mountain-`,
		title: `Red`,
	},
	green: {
		files: [`01`, `02`, `03`, `04`, `05`, `06`, `07`, `08`, `09`],
		path: `${path}forest-`,
		title: `Green`,
	},
	multicolor: {
		files: [`01`, `02`, `03`, `04`],
		path: `${path}multicolor-`,
		title: `Multicolor`,
	},
	colorless: {
		files: [`01`, `02`, `03`, `04`],
		path: `${path}colorless-`,
		title: `Colorless`,
	},
	nonBasicLand: {
		files: [`01`, `02`],
		path: `${path}land-non-basic-`,
		title: `Land`,
		subTitle: `(Non-basic)`,
	},
	basicLand: {
		files: [`01`, `02`, `03`, `04`, `05`, `06`],
		path: `${path}land-basic-`,
		title: `Land`,
		subTitle: `(Basic)`,
	},
	tokens: {
		files: [`01`, `02`],
		path: `${path}tokens-`,
		title: `Tokens`,
	},
	miscellaneous: {
		files: [`01`],
		path: `${path}miscellaneous-`,
		title: `Miscellaneous`,
	},
	other: {
		files: [`01`],
		path: `${path}other-`,
		title: `Other`,
		subTitle: `(Trading Card Games)`,
	},
};

/* Function to push top loader values */
const addTopLoaders = (value: TopLoaderConfigType) => {
	value.files.forEach((file: string) => {
		topLoaders.push({
			image: `${value.path}${file}.jpg`,
			title: value.title,
			subTitle: value?.subTitle ?? ``,
		});
	});
};

/* Initialize top loaders */
export const topLoaders: TopLoaderType[] = [];

/* Push top loaders */
addTopLoaders(config.white);
addTopLoaders(config.blue);
addTopLoaders(config.black);
addTopLoaders(config.red);
addTopLoaders(config.green);
addTopLoaders(config.multicolor);
addTopLoaders(config.colorless);
addTopLoaders(config.nonBasicLand);
addTopLoaders(config.basicLand);
addTopLoaders(config.tokens);
addTopLoaders(config.miscellaneous);
addTopLoaders(config.other);
