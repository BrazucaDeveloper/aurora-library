import { hash } from "crypto";
import { faker } from '@faker-js/faker';

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  cpf: string;
  address: string;
}

export function useClients() {
  const getClients = () => {
    return Array.from({ length: 10 }, (_, i) => ({
      id: hash('sha256', `client-${i}`),
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      email: faker.internet.email(),
      phone: faker.phone.number({ style: 'national' }),
      status: faker.helpers.arrayElement(['active', 'inactive']),
      cpf: faker.helpers.replaceSymbols('###.###.###-##'),
      address: faker.location.streetAddress(),
    }));
  }

  return { getClients };
}