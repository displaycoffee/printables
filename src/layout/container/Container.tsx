/* Styles */
import './styles/container.scss';

/* Packages */
import { Link, Outlet, useLocation } from '@tanstack/react-router';

/* Scripts */
import { useBodyClass } from './scripts/container-hooks';
import { navigationHeader } from '../../components/navigation/scripts/navigation';

/* Components */
import { ErrorBoundary } from '../../components/error-boundary/ErrorBoundary';
import { Navigation } from '../../components/navigation/Navigation';

export const Container = () => {
	// Set body class using custom hook
	useBodyClass('labels');

	return (
		<ErrorBoundary message={<ContainerError />}>
			<Navigation data={navigationHeader} label={'Header Navigation'} />

			<Outlet />
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
