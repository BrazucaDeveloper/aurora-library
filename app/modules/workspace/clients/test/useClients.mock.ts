import { generateFakeClients } from "./clients.mock";

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  cpf: string;
  address: string;
}

interface ClientFilter {
  search: '',
  orderBy: '',
  status: 'active' | 'inactive' | 'all'
}

interface Pagination {
  current: number,
  offset: number
}

export function useClients() {
  let clients: Client[] | null = null;

  const manyClients = (): number => clients?.length ?? 0;

  const getClients = (pagination: Pagination, filters?: ClientFilter): Client[] => {
    if (clients && clients.length > 0) return sliceClients(pagination);

    clients = generateFakeClients();
    return sliceClients(pagination);
  }

  const sliceClients = (pagination: Pagination): Client[] => {
    return clients!.slice(pagination.current, pagination.offset);
  }

  return { manyClients, getClients, };
}