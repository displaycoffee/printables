/* Styles */
import './styles/labels.scss';

/* Scripts */
import { LabelsProps, LabelsRowProps } from './scripts/labels-types';

export const Labels = (props: LabelsProps) => {
	const { label, values } = props;

	return (
		<div className="labels row row-auto row-wrap">
			{values.map((value, index) => (
				<LabelsRow label={label ?? ''} value={value} key={`${value}-${index}`} />
			))}
		</div>
	);
};

export const LabelsRow = (props: LabelsRowProps) => {
	const { label, value } = props;

	return (
		<div className="label column">
			<div className="label-content row row-auto row-nowrap row-justify-content-center row-align-items-center">
				<span className="label-title">{label ? label : value}</span>
				{label ? <span className="label-subtitle">{value}</span> : null}
			</div>
		</div>
	);
};
