import { ClientsPage } from './page';
import type { Route } from './+types/route';
import { useClients } from './hooks/useClients';
import { DotsLoading } from '@app/components/lib/loading/dots-loading';

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const query = new URLSearchParams(request.url.split('?')[1]);
  console.log(query.get('search'));
  
  const { getClients } = useClients();
  return { clients: getClients() };
}

export function HydrateFallback() {
  return (
    <div className='flex-grow'>
      <h1>Loading...</h1><DotsLoading />
    </div>
  );
}

export default function ClientPage() {
  return <ClientsPage />;
}

export async function action({ request }: Route.ActionArgs) {
  console.dir(request.url);
}