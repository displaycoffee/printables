/* Packages */
import { createLazyFileRoute } from '@tanstack/react-router';

/* Components */
import { Page } from '@/components/page/Page';

export const Route = createLazyFileRoute('/')({
	component: RouteComponent,
});

function RouteComponent() {
	return <Page>Nothing to see here.</Page>;
}
