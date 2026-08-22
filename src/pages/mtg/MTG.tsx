/* Styles */
import './styles/mtg.scss';

/* Scripts */
import { LabelsProps, LabelsRowProps, TopLoadersProps, TopLoadersRowProps } from './scripts/mtg-types';
import { useAppContext } from '../../context/scripts/context-hooks';
import { alphabet } from './scripts/alphabet';
import { forest } from './scripts/forest';
import { island } from './scripts/island';
import { mountain } from './scripts/mountain';
import { plains } from './scripts/plains';
import { swamp } from './scripts/swamp';
import { artSeries } from './scripts/art-series';
import { misc } from './scripts/misc';
import { topLoaders } from './scripts/top-loaders';

/* Components */
import { Page } from '../../components/page/Page';
import { Image } from '../../components/image/Image';

export const Labels = () => {
	return (
		<>
			<Page>
				<LabelsWrapper values={alphabet} />
				<LabelsWrapper values={alphabet} />
			</Page>

			<Page>
				<LabelsWrapper values={alphabet} />
				<LabelsWrapper values={alphabet} />
			</Page>

			<Page>
				<LabelsWrapper values={alphabet} />
				<LabelsWrapper values={alphabet} />
			</Page>

			<Page>
				<LabelsWrapper values={alphabet} />
				<LabelsWrapper values={alphabet} />
			</Page>

			<Page>
				<LabelsWrapper title={'Art Series'} values={artSeries} />
				<LabelsWrapper values={misc} />
			</Page>

			<Page>
				<LabelsWrapper title={'Forest'} values={forest} />
			</Page>

			<Page>
				<LabelsWrapper title={'Island'} values={island} />
			</Page>

			<Page>
				<LabelsWrapper title={'Mountain'} values={mountain} />
			</Page>

			<Page>
				<LabelsWrapper title={'Plains'} values={plains} />
			</Page>

			<Page>
				<LabelsWrapper title={'Swamp'} values={swamp} />
			</Page>
		</>
	);
};

export const LabelsWrapper = (props: LabelsProps) => {
	const { title, values } = props;

	return (
		<div className="mtg-labels row row-auto row-wrap row-justify-content-center">
			{values.map((value, index) => (
				<LabelsRow index={index} title={title ?? ''} value={value} key={`${value}-${index}`} />
			))}
		</div>
	);
};

export const LabelsRow = (props: LabelsRowProps) => {
	const { index, title, value } = props;
	const { utils } = useAppContext();

	return (
		<div className={`mtg-label mtg-label-${utils.handleize(value)}-${index} column`}>
			<div className="mtg-label-content row row-auto row-nowrap row-justify-content-center row-align-items-center">
				<h6 className="mtg-label-title">{title ? title : value}</h6>
				{title ? <span className="mtg-label-subtitle">{value}</span> : null}
			</div>
		</div>
	);
};

export const TopLoaders = () => {
	const chunkSize = 4;
	const loaders = [];

	// Create array of four sets of top loaders
	for (let i = 0; i < topLoaders.length; i += chunkSize) {
		const chunk = topLoaders.slice(i, i + chunkSize);
		loaders.push(chunk);
	}

	return (
		<>
			{loaders.map((loader, index) => {
				return (
					<Page key={index}>
						<TopLoadersWrapper values={loader} />
					</Page>
				);
			})}
		</>
	);
};

export const TopLoadersWrapper = (props: TopLoadersProps) => {
	const { values } = props;

	return (
		<div className="mtg-top-loaders row row-auto row-wrap row-spacing-20 row-justify-content-center">
			{values.map((value, index) => (
				<TopLoadersRow index={index} value={value} key={`${value}-${index}`} />
			))}
		</div>
	);
};

export const TopLoadersRow = (props: TopLoadersRowProps) => {
	const { index, value } = props;
	const { utils } = useAppContext();

	return (
		<div className={`mtg-top-loader mtg-top-loader-${utils.handleize(value.title)}-${index} column`}>
			<Image alt={value.title} hasLazy={false} image={value.image} wrapperClasses={['fit']} />
			<div className="mtg-top-loader-overlay">
				<h2 className="mtg-top-loader-title h1">{value.title}</h2>
				{value?.subTitle ? <h3 className="mtg-top-loader-subtitle h4">{value.subTitle}</h3> : null}
			</div>
		</div>
	);
};
