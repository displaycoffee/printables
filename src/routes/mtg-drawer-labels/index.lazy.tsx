/* Packages */
import { createLazyFileRoute } from '@tanstack/react-router';

/* Components */
import { DrawerLabels } from '../../components/mtg/MTG';

export const Route = createLazyFileRoute('/mtg-drawer-labels/')({
	component: RouteComponent,
});

function RouteComponent() {
	return <DrawerLabels />;
}
