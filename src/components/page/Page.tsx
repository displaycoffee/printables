/* Styles */
import './styles/page.scss';

/* Scripts */
import { PageProps } from './scripts/page-types';

export const Page = (props: PageProps) => {
	const { children } = props;
	const showBoundary = false;

	return (
		<div className="page">
			<div className={`page-content${showBoundary ? ' page-content-boundary' : ''} margin-trim`}>{children}</div>
		</div>
	);
};
