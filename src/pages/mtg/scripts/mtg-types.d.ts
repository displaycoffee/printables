/* Type definitions */
type Labels = {
	title?: string;
	values: string[];
};

type LabelsRow = {
	index: number;
	title?: string;
	value: string;
};

type TopLoader = {
	image: string;
	subTitle?: string;
	title: string;
};

type TopLoaders = {
	values: TopLoader[];
};

type TopLoadersRow = {
	index: number;
	value: TopLoader;
};

/* Export types */
export type TopLoaderType = TopLoader;

/* Export prop types */
export type LabelsProps = Labels;

export type LabelsRowProps = LabelsRow;

export type TopLoadersProps = TopLoaders;

export type TopLoadersRowProps = TopLoadersRow;
