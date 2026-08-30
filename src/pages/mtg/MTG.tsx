/* Styles */
import './styles/mtg.scss';

/* Scripts */
import { LabelsProps, LabelsRowProps, TopLoadersProps, TopLoadersRowProps } from './scripts/mtg-types';
import { useAppContext } from '../../context/scripts/context-hooks';
import { dividerLabels } from './scripts/divider-labels';
import { drawerLabels } from './scripts/drawer-labels';
import { topLoaders } from './scripts/top-loaders';

/* Components */
import { Page } from '../../components/page/Page';
import { Image } from '../../components/image/Image';

export const DividerLabels = () => {
	const { utils } = useAppContext();
	const labels = utils.chunk(dividerLabels, 66);

	return labels.map((loader, index) => {
		return (
			<Page key={index}>
				<LabelsWrapper values={loader} />
			</Page>
		);
	});
};

export const DrawerLabels = () => {
	const { utils } = useAppContext();
	const labels = utils.chunk(drawerLabels, 66);

	return labels.map((loader, index) => {
		return (
			<Page key={index}>
				<LabelsWrapper values={loader} />
			</Page>
		);
	});
};

export const LabelsWrapper = (props: LabelsProps) => {
	const { values } = props;

	return (
		<div className="mtg-labels row row-auto row-wrap row-justify-content-center">
			{values.map((value, index) => (
				<LabelsRow index={index} value={value} key={`${value.title}-${index}`} />
			))}
		</div>
	);
};

export const LabelsRow = (props: LabelsRowProps) => {
	const { index, value } = props;
	const { utils } = useAppContext();

	return (
		<div className={`mtg-label mtg-label-${utils.handleize(value.title)}-${index} column`}>
			<div className="mtg-label-content row row-auto row-nowrap row-justify-content-center row-align-items-center">
				<h6 className="mtg-label-title">{value.title}</h6>
				{value.subTitle ? <span className="mtg-label-subtitle">{value.subTitle}</span> : null}
			</div>
		</div>
	);
};

export const TopLoaders = () => {
	const { utils } = useAppContext();
	const loaders = utils.chunk(topLoaders, 4);

	return loaders.map((loader, index) => {
		return (
			<Page key={index}>
				<TopLoadersWrapper values={loader} />
			</Page>
		);
	});
};

export const TopLoadersWrapper = (props: TopLoadersProps) => {
	const { values } = props;

	return (
		<div className="mtg-top-loaders row row-auto row-wrap row-spacing-20 row-justify-content-center">
			{values.map((value, index) => (
				<TopLoadersRow index={index} value={value} key={`${value.title}-${index}`} />
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
