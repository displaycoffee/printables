/* Styles */
import './styles/labels.scss';

/* Scripts */
import { LabelsProps, LabelsRowProps } from './scripts/labels-types';
import { alphabet } from './scripts/alphabet';
import { forest } from './scripts/forest';
import { island } from './scripts/island';
import { mountain } from './scripts/mountain';
import { plains } from './scripts/plains';
import { swamp } from './scripts/swamp';
import { artSeries } from './scripts/art-series';
import { misc } from './scripts/misc';

/* Components */
import { Page } from '../../components/page/Page';

export const Labels = () => {
	return (
		<>
			<Page>
				<LabelsWrapper values={alphabet} />
				<LabelsWrapper values={alphabet} />
				<LabelsWrapper values={alphabet} />
			</Page>

			<Page>
				<LabelsWrapper values={alphabet} />
				<LabelsWrapper values={alphabet} />
				<LabelsWrapper values={alphabet} />
			</Page>

			<Page>
				<LabelsWrapper values={alphabet} />
				<LabelsWrapper values={alphabet} />
				<LabelsWrapper label={'Art Series'} values={artSeries} />
				<LabelsWrapper values={misc} />
			</Page>

			<Page>
				<LabelsWrapper label={'Forest'} values={forest} />
				<LabelsWrapper label={'Island'} values={island} />
			</Page>

			<Page>
				<LabelsWrapper label={'Mountain'} values={mountain} />
				<LabelsWrapper label={'Plains'} values={plains} />
			</Page>

			<Page>
				<LabelsWrapper label={'Swamp'} values={swamp} />
			</Page>
		</>
	);
};

export const LabelsWrapper = (props: LabelsProps) => {
	const { label, values } = props;

	return (
		<div className="labels row row-auto row-wrap row-justify-content-center">
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
				<h6 className="label-title">{label ? label : value}</h6>
				{label ? <span className="label-subtitle">{value}</span> : null}
			</div>
		</div>
	);
};
