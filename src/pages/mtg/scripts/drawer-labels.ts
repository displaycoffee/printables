/* Scripts */
import { LabelConfigType, LabelType } from './mtg-types';
import { drawerWhite } from './drawer-labels-white';
import { drawerBlue } from './drawer-labels-blue';
import { drawerBlack } from './drawer-labels-black';
import { drawerRed } from './drawer-labels-red';
import { drawerGreen } from './drawer-labels-green';
import { drawerMulticolor } from './drawer-labels-multicolor';
import { drawerColorless } from './drawer-labels-colorless';
import { drawerNonBasicLand } from './drawer-labels-non-basic-land';
import { drawerBasicLand } from './drawer-labels-basic-land';

/* Variables */
const config: { [key: string]: LabelConfigType } = {
	white: {
		values: drawerWhite,
	},
	blue: {
		values: drawerBlue,
	},
	black: {
		values: drawerBlack,
	},
	red: {
		values: drawerRed,
	},
	green: {
		values: drawerGreen,
	},
	multicolor: {
		values: drawerMulticolor,
	},
	colorless: {
		values: drawerColorless,
	},
	nonBasicLand: {
		values: drawerNonBasicLand,
	},
	basicLand: {
		values: drawerBasicLand,
	},
};

/* Function to push drawer loader values */
const addLabels = (value: LabelConfigType) => {
	value.values.forEach((label: string) => {
		drawerLabels.push({
			title: value?.title ?? label,
			subTitle: value?.title ? label : ``,
		});
	});
};

/* Initialize drawer loaders */
export const drawerLabels: LabelType[] = [];

/* Push drawer loaders */
addLabels(config.white);
addLabels(config.blue);
addLabels(config.black);
addLabels(config.red);
addLabels(config.green);
addLabels(config.multicolor);
addLabels(config.colorless);
addLabels(config.nonBasicLand);
addLabels(config.basicLand);
