import { render, screen } from '@testing-library/react';
import { Table } from './Table';
import type { TableColumn } from './Table';

interface MockEmployee extends Record<string, unknown> {
    id: number;
    name?: string;
    email?: string;
}

const mockColumns: TableColumn[] = [
    { name: 'id', title: 'ID' },
    { name: 'name', title: 'Nome' },
    { name: 'email', title: 'Email' },
];

const mockRows: MockEmployee[] = [
    { id: 1, name: 'João Silva', email: 'joao@example.com' },
    { id: 2, name: 'Maria Santos', email: 'maria@example.com' },
    { id: 3, name: 'Pedro Oliveira', email: 'pedro@example.com' },
];

const mockEmptyCell: MockEmployee[] = [
    { id: 1, name: 'João Silva', email: 'joao@example.com' },
    { id: 2, name: undefined, email: undefined },
    { id: 3, name: 'Pedro Oliveira', email: 'pedro@example.com' },
];

const mockManyRows: MockEmployee[] = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Pessoa ${i + 1}`,
    email: `pessoa${i + 1}@example.com`,
}));

describe('Table Component', () => {
    it('should render the table with data', () => {
        render(<Table columns={mockColumns} rows={mockRows} />);
        expect(screen.getByText('Nome')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('João Silva')).toBeInTheDocument();
        expect(screen.getByText('maria@example.com')).toBeInTheDocument();
    });

    it('should display a message when there is no data', () => {
        render(<Table columns={mockColumns} rows={[]} />);

        expect(screen.getByText('Nenhum registro encontrado')).toBeInTheDocument();
        expect(screen.getByText('Faça outra busca ou atualize a página')).toBeInTheDocument();
    });

    it('should render the pagination component', () => {

        render(<Table columns={mockColumns} rows={mockManyRows} defaultPageSize={5} />);
        const buttonPreviousPage = screen.getByRole('button', { name: /Previous/i });
        const buttonNextPage = screen.getByRole('button', { name: /Next/i });
        expect(buttonPreviousPage).toBeInTheDocument();
        expect(buttonNextPage).toBeInTheDocument();
    });

    it('should apply a custom className', () => {
        const customClass = 'custom-table-class';
        const { container } = render(
            <Table columns={mockColumns} rows={mockRows} className={customClass} />
        );
        const paper = container.querySelector(`.${customClass}`);
        expect(paper).toBeInTheDocument();
    });

    it('should use the default page size', () => {
        render(<Table columns={mockColumns} rows={mockManyRows} defaultPageSize={5} />);
        const allRows = screen.getAllByRole('row');
        const headerTable = 1;
        const countRows = allRows.length - headerTable;
        expect(countRows).toBe(5);
    });

    it('should display a message when there is no data in the cell', () => {
        render(<Table columns={mockColumns} rows={mockEmptyCell} />);
        const emptyCell = screen.getAllByText('-');
        expect(emptyCell.length).toBeGreaterThan(0);
    });
});
