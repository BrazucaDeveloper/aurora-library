import { faker } from '@faker-js/faker';
import type { Client } from "./useClients.mock";

export const generateFakeClients = (): Client[] => {
  faker.seed(123); // For consistent fake data generation
  
  return Array.from({ length: 50 }, (_, i) => ({
    id: (i + 1).toString(),
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    email: faker.internet.email(),
    phone: faker.phone.number({ style: 'national' }),
    status: faker.helpers.arrayElement(['active', 'inactive']),
    cpf: faker.helpers.replaceSymbols('###.###.###-##'),
    address: faker.location.streetAddress(),
  }));
}