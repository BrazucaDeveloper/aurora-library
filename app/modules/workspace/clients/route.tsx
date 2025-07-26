import { ClientsPage } from './page';
import type { Route } from './+types/route';
import { useClients } from './hooks/useClients';

export async function loader({ params }: Route.LoaderArgs) {
  const { getClients } = useClients();

  return { clients: getClients() };
}

export default function ClientPage() {
  return <ClientsPage />;
}

export async function action({  }: Route.ActionArgs) { }