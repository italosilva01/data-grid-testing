import type { Employee } from '@shared/types/employee';
import type { TableColumn } from '@shared/components';

export const APP_NAME = 'Angellira Test';

export const ROUTES = {
  HOME: '/',
} as const;

export const LOCAL_STORAGE_KEYS = {
  // Defina as chaves do localStorage aqui
} as const;

export const DEFAULT_TABLE_PAGE_SIZE = 10;

export const DEFAULT_TABLE_PAGE_SIZES = [5, 10, 15, 20];

export const TABLE_COLUMNS: TableColumn[] = [
  { name: 'name', title: 'Nome' },
  { name: 'email', title: 'Email' },
  { name: 'city', title: 'Cidade' },
  { name: 'company.company.name', title: 'Nome da empresa' }, 
];export const PAGE_SIZES_OPTIONS = [5, 10, 15, 20];
export const EXAMPLE_ROWS: Employee[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao.silva@example.com',
    phone: '(11) 98765-4321',
    address: 'Rua das Flores, 123',
    city: 'São Paulo',
    state: 'SP',
    zip: '01234-567',
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria.santos@example.com',
    phone: '(21) 97654-3210',
    address: 'Av. Atlântica, 456',
    city: 'Rio de Janeiro',
    state: 'RJ',
    zip: '22041-001',
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },
  },
  {
    id: '3',
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@example.com',
    phone: '(31) 96543-2109',
    address: 'Rua da Bahia, 789',
    city: 'Belo Horizonte',
    state: 'MG',
    zip: '30160-011',
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },
  },
  {
    id: '4',
    name: 'Ana Costa',
    email: 'ana.costa@example.com',
    phone: '(41) 95432-1098',
    address: 'Rua XV de Novembro, 321',
    city: 'Curitiba',
    state: 'PR',
    zip: '80020-310',
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },
  },
  {
    id: '5',
    name: 'Carlos Ferreira',
    email: 'carlos.ferreira@example.com',
    phone: '(51) 94321-0987',
    address: 'Av. Ipiranga, 654',
    city: 'Porto Alegre',
    state: 'RS',
    zip: '90160-093', 
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },    
  },
  {
    id: '6',
    name: 'Juliana Lima',
    email: 'juliana.lima@example.com',
    phone: '(61) 93210-9876',
    address: 'SQN 308 Bloco A',
    city: 'Brasília',
    state: 'DF',
    zip: '70747-010',
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },
  },
  {
    id: '7',
    name: 'Roberto Souza',
    email: 'roberto.souza@example.com',
    phone: '(71) 92109-8765',
    address: 'Av. Sete de Setembro, 987',
    city: 'Salvador',
    state: 'BA',
    zip: '40060-001', 
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },
  },
  {
    id: '8',
    name: 'Fernanda Alves',
    email: 'fernanda.alves@example.com',
    phone: '(81) 91098-7654',
    address: 'Rua da Aurora, 147',
    city: 'Recife',
    state: 'PE',
    zip: '50050-000',
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },
  },
  {
    id: '9',
    name: 'Lucas Martins',
    email: 'lucas.martins@example.com',
    phone: '(85) 90987-6543',
    address: 'Av. Beira Mar, 258',
    city: 'Fortaleza',
    state: 'CE',
    zip: '60165-121',
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },
  },
  {
    id: '10',
    name: 'Camila Rodrigues',
    email: 'camila.rodrigues@example.com',
    phone: '(62) 89876-5432',
    address: 'Rua T-27, 369',
    city: 'Goiânia',
    state: 'GO',
    zip: '74215-900',
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },
  },
  {
    id: '11',
    name: 'Ricardo Pereira',
    email: 'ricardo.pereira@example.com',
    phone: '(27) 88765-4321',
    address: 'Av. Jerônimo Monteiro, 741',
    city: 'Vitória',
    state: 'ES',
    zip: '29010-002',
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },
  },
  {
    id: '12',
    name: 'Beatriz Cardoso',
    email: 'beatriz.cardoso@example.com',
    phone: '(47) 87654-3210',
    address: 'Rua Joinville, 852',
    city: 'Florianópolis',
    state: 'SC',
    zip: '88015-130',
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },
  },
  {
    id: '13',
    name: 'Eduardo Mendes',
    email: 'eduardo.mendes@example.com',
    phone: '(19) 86543-2109',
    address: 'Av. Francisco Glicério, 963',
    city: 'Campinas',
    state: 'SP',
    zip: '13012-100',
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },
  },
  {
    id: '14',
    name: 'Patrícia Rocha',
    email: 'patricia.rocha@example.com',
    phone: '(48) 85432-1098',
    address: 'Rua Felipe Schmidt, 159',
    city: 'Blumenau',
    state: 'SC',
    zip: '89010-900',
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },
  },
  {
    id: '15',
    name: 'Marcos Dias',
    email: 'marcos.dias@example.com',
    phone: '(16) 84321-0987',
    address: 'Rua General Osório, 357',
    city: 'Ribeirão Preto',
    state: 'SP',
    zip: '14015-030',
    company: {
      website: 'example.com',
      company: {
        name: 'Example Inc.',
        catchPhrase: 'We do what we do',
        bs: 'We do what we do',
      },
    },
  },
];
