import { ClientsPage } from '@app/modules/clients/ui/clients-page';

import type { Route } from './+types/clients';

export async function loader({ params, request }: Route.LoaderArgs) { }

export default function Clients() { return <ClientsPage /> };

export async function action({ request }: Route.ActionArgs) { }