import type { TableColumn } from '@shared/components';

export const APP_NAME = 'Angellira Test';

export const ROUTES = {
  HOME: '/',
} as const;

export const DEFAULT_TABLE_PAGE_SIZE = 10;

export const TABLE_COLUMNS_CONFIG_EMPLOYEES: TableColumn[] = [
  { name: 'name', title: 'Nome' },
  { name: 'email', title: 'Email' },
  { name: 'city', title: 'Cidade' },
  { name: 'companyName', title: 'Nome da empresa' }, 
];

export const PAGE_SIZES_OPTIONS = [5, 10, 15, 20];

