/* Packages */
import { utils as utilsShared, utilsBrowser as utilsBrowserShared } from '@displaycoffee/scripts/utils';

/* Utils from @displaycoffee/scripts, plus any custom scripts for this project */
export const utils: UtilsType = {
	...utilsShared,
	chunk: <T extends string | ObjectPrimitiveType>(array: T[], chunkSize: number) => {
		const chunks: T[][] = [];

		// Create chunks of arrays
		for (let i = 0; i < array.length; i += chunkSize) {
			const chunk = array.slice(i, i + chunkSize);
			chunks.push(chunk);
		}

		return chunks;
	},
};

export const utilsBrowser: UtilsBrowserType = {
	...utilsBrowserShared,
};
