export const utils: UtilsType = {
	chunk: <T extends string | ObjectPrimitiveType>(array: T[], chunkSize: number) => {
		const chunks: T[][] = [];

		// Create chunks of arrays
		for (let i = 0; i < array.length; i += chunkSize) {
			const chunk = array.slice(i, i + chunkSize);
			chunks.push(chunk);
		}

		return chunks;
	},
	getLast: (value: string | string[], delimeter?: string) => {
		// Get last item in array
		let valueArray: string[] | number[] = [];
		if (Array.isArray(value)) {
			valueArray = value;
		} else if (delimeter) {
			valueArray = value.split(delimeter);
		}
		return valueArray[valueArray.length - 1] ?? '';
	},
	getPage: () => {
		// Get previous / parent page
		return window.location.pathname.split('/').slice(0, -1).join('/');
	},
	handleize: (value: string) => {
		// Format value for html classes
		return value
			.toLowerCase()
			.trim()
			.replace(/[^\w\s]/g, '')
			.replace(/\s/g, '-');
	},
	setAttributes: (element: HTMLElement, attributes: ObjectStringType) => {
		// Set multiple attributes on an element
		for (const attribute in attributes) {
			element.setAttribute(attribute, attributes[attribute]);
		}
	},
};
