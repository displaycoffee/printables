/* Type definitions */
type Label = {
	subTitle?: string;
	title: string;
};

type LabelConfig = {
	title?: string;
	values: string[];
};

type Labels = {
	values: Label[];
};

type LabelsRow = {
	index: number;
	value: Label;
};

type TopLoader = {
	image: string;
	subTitle?: string;
	title: string;
};

type TopLoaderConfig = {
	files: string[];
	path: string;
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
export type LabelType = Label;

export type LabelConfigType = LabelConfig;

export type TopLoaderType = TopLoader;

export type TopLoaderConfigType = TopLoaderConfig;

/* Export prop types */
export type LabelsProps = Labels;

export type LabelsRowProps = LabelsRow;

export type TopLoadersProps = TopLoaders;

export type TopLoadersRowProps = TopLoadersRow;
