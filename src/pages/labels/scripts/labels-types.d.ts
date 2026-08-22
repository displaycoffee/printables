/* Type definitions */
type Labels = {
	label?: string;
	values: string[];
};

type LabelsRow = {
	label?: string;
	value: string;
};

/* Export prop types */
export type LabelsProps = Labels;

export type LabelsRowProps = LabelsRow;
