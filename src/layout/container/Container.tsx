/* Styles */
import './styles/container.scss';

/* Packages */
import { Link } from 'react-router-dom';

/* Scripts */
import { alphabet } from './scripts/alphabet';

/* Components */
import { ErrorBoundary } from '../../components/error-boundary/ErrorBoundary';
import { Labels } from '../../components/labels/Labels';

export const Container = () => {
	return (
		<ErrorBoundary message={<ContainerError />}>
			<div className="page">
				<div className="page-content">
					<Labels label={'Art Series'} values={alphabet} />
				</div>
			</div>
		</ErrorBoundary>
	);
};

const ContainerError = () => {
	return (
		<p>
			Something went wrong. <Link to={'/'}>Go back.</Link>
		</p>
	);
};
