/* Styles */
import './styles/container.scss';

/* Packages */
import { Link } from 'react-router-dom';

/* Components */
import { ErrorBoundary } from '../../components/error-boundary/ErrorBoundary';

export const Container = () => {
	return (
		<ErrorBoundary message={<ContainerError />}>
			<div className="page">
				<div className="page-content">Stuff goes here.</div>
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
