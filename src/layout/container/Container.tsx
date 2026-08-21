/* Styles */
import './styles/container.scss';

/* Packages */
import { Link } from 'react-router-dom';

/* Components */
import { ErrorBoundary } from '../../components/error-boundary/ErrorBoundary';
import { Navigation, NavigationRoutes } from '../../components/navigation/Navigation';

export const Container = () => {
	return (
		<ErrorBoundary message={<ContainerError />}>
			<Navigation label={'Header Navigation'} />

			<NavigationRoutes />
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
