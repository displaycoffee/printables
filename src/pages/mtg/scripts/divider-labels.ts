/* Scripts */
import { LabelConfigType, LabelType } from './mtg-types';
import { alphabet } from './divider-labels-alphabet';
import { plains } from './divider-labels-plains';
import { island } from './divider-labels-island';
import { swamp } from './divider-labels-swamp';
import { mountain } from './divider-labels-mountain';
import { forest } from './divider-labels-forest';
import { artSeries } from './divider-labels-art-series';
import { miscellaneous } from './divider-labels-miscellaneous';

/* Variables */
const config: { [key: string]: LabelConfigType } = {
	abcWhite: {
		values: alphabet,
	},
	abcBlue: {
		values: alphabet,
	},
	abcBlack: {
		values: alphabet,
	},
	abcRed: {
		values: alphabet,
	},
	abcGreen: {
		values: alphabet,
	},
	abcMulticolor: {
		values: alphabet,
	},
	abcColorless: {
		values: alphabet,
	},
	abcNonBasicLand: {
		values: alphabet,
	},
	landWhite: {
		title: `Plains`,
		values: plains,
	},
	landBlue: {
		title: `Island`,
		values: island,
	},
	landBlack: {
		title: `Swamp`,
		values: swamp,
	},
	landRed: {
		title: `Mountain`,
		values: mountain,
	},
	landGreen: {
		title: `Forest`,
		values: forest,
	},
	artSeries: {
		title: `Art Series`,
		values: artSeries,
	},
	miscellaneous: {
		values: miscellaneous,
	},
};

/* Function to push divider loader values */
const addLabels = (value: LabelConfigType) => {
	value.values.forEach((label: string) => {
		dividerLabels.push({
			title: value?.title ?? label,
			subTitle: value?.title ? label : ``,
		});
	});
};

/* Initialize divider loaders */
export const dividerLabels: LabelType[] = [];

/* Push divider loaders */
addLabels(config.abcWhite);
addLabels(config.abcBlue);
addLabels(config.abcBlack);
addLabels(config.abcRed);
addLabels(config.abcGreen);
addLabels(config.abcMulticolor);
addLabels(config.abcColorless);
addLabels(config.abcNonBasicLand);
addLabels(config.landWhite);
addLabels(config.landBlue);
addLabels(config.landBlack);
addLabels(config.landRed);
addLabels(config.landGreen);
addLabels(config.artSeries);
addLabels(config.miscellaneous);
