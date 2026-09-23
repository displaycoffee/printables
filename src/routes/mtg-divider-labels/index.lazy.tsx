/* Packages */
import { createLazyFileRoute } from '@tanstack/react-router';

/* Components */
import { DividerLabels } from '../../components/mtg/MTG';

export const Route = createLazyFileRoute('/mtg-divider-labels/')({
	component: RouteComponent,
});

function RouteComponent() {
	return <DividerLabels />;
}
