/* Styles */
import './styles/container.scss';

/* Packages */
import { Link } from 'react-router-dom';

/* Scripts */
import { useBodyClass } from './scripts/container-hooks';

/* Components */
import { ErrorBoundary } from '../../components/error-boundary/ErrorBoundary';
import { Navigation, NavigationRoutes } from '../../components/navigation/Navigation';

export const Container = () => {
	// Set body class using custom hook
	useBodyClass('labels');

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
