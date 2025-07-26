import { generateFakeClients } from "../test/clients.mock";

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  cpf: string;
  address: string;
}

export function useClients() {
  let clients: Client[] | null = null;

  const getClients = (): Client[] => {
    if (clients && clients.length > 0) return clients;
    return clients ??= generateFakeClients();
  }

  // const updateClient = (cid: string, updatedData: Partial<Client>): Client => {
  // }

  return { getClients };
}