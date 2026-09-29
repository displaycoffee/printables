/* Packages */
import { createLazyFileRoute } from '@tanstack/react-router';

/* Components */
import { TopLoaders } from '../../components/mtg/MTG';

export const Route = createLazyFileRoute('/mtg-top-loaders/')({
	component: RouteComponent,
});

function RouteComponent() {
	return <TopLoaders />;
}
