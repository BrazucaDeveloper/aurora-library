import { WorkspaceFallback } from '../_components/workspace-fallback';
import type { Route } from './+types/route';
import { ClientsPage } from './page';
import { useClients } from './test/useClients.mock';

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
	console.log('Hello!');

	const query = new URLSearchParams(request.url.split('?')[1]);

	const { getClients, manyClients } = useClients();
	const clients = getClients({ current: 1, offset: 11 });

	return {
		clients,
		pagination: {
			current: Number(query.get('page') ?? '1'),
			total: manyClients,
		},
	};
}

export function HydrateFallback() {
	return <WorkspaceFallback />;
}

export default () => <ClientsPage />;

export async function action({ request }: Route.ActionArgs) {
	console.dir(request.url);
}
