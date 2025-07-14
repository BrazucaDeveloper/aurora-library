import { Route } from './+types/clients';
import { ClientsPage } from '@modules/clients/pages/clients-page';

export async function loader({ params, request }: Route.LoaderArgs) { }

export default function Clients(props: Route.ComponentProps) {
	return <ClientsPage {...props} />;
}

export async function action({ request }: Route.ActionArgs) { }