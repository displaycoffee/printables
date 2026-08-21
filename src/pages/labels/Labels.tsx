/* Styles */
import './styles/labels.scss';

/* Scripts */
import { LabelsProps, LabelsRowProps } from './scripts/labels-types';
import { alphabet } from './scripts/alphabet';

/* Components */
import { Page } from '../../components/page/Page';

export const Labels = () => {
	return (
		<>
			<Page>
				<LabelsWrapper label={'Art Series'} values={alphabet} />
				<LabelsWrapper label={'Art Series'} values={alphabet} />
			</Page>
			<Page>
				<LabelsWrapper label={'Art Series'} values={alphabet} />
				<LabelsWrapper label={'Art Series'} values={alphabet} />
			</Page>
			<Page>
				<LabelsWrapper label={'Art Series'} values={alphabet} />
				<LabelsWrapper label={'Art Series'} values={alphabet} />
			</Page>
		</>
	);
};

export const LabelsWrapper = (props: LabelsProps) => {
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
