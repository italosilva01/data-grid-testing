import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './Search';

describe('Search Component', () => {
    it('should render the search component with default placeholder', () => {
        render(<Search />);
        const searchBox = screen.getByRole('searchbox');
        expect(searchBox).toBeInTheDocument();
        expect(searchBox).toHaveAttribute('placeholder', 'Pesquisar');
    });

    it('should render with custom placeholder', () => {
        const customPlaceholder = 'Buscar usuários';
        render(<Search placeholder={customPlaceholder} />);
        const searchBox = screen.getByRole('searchbox');
        expect(searchBox).toHaveAttribute('placeholder', customPlaceholder);
    });

    it('should have proper accessibility attributes', () => {
        render(<Search />);
        const searchBox = screen.getByRole('searchbox');
        expect(searchBox).toHaveAttribute('aria-label', 'Pesquisar colaborador por nome');
        expect(searchBox).toHaveAttribute('role', 'searchbox');
    });

    it('should handle onChange event', () => {
        const handleChange = vi.fn();
        render(<Search onChange={handleChange} />);
        const searchBox = screen.getByRole('searchbox');

        fireEvent.change(searchBox, { target: { value: 'João Silva' } });

        expect(handleChange).toHaveBeenCalled();
    });

    it('should update input value when typing', () => {
        render(<Search />);
        const searchBox = screen.getByRole('searchbox') as HTMLInputElement;

        fireEvent.change(searchBox, { target: { value: 'Maria Santos' } });

        expect(searchBox.value).toBe('Maria Santos');
    });

    it('should apply custom className', () => {
        const customClass = 'custom-search-class';
        const { container } = render(<Search className={customClass} />);
        const boxElement = container.querySelector(`.${customClass}`);
        expect(boxElement).toBeInTheDocument();
    });

    it('should pass additional input props', () => {
        render(<Search disabled maxLength={50} />);
        const searchBox = screen.getByRole('searchbox');
        expect(searchBox).toBeDisabled();
        expect(searchBox).toHaveAttribute('maxLength', '50');
    });

    it('should render search icon', () => {
        const { container } = render(<Search />);
        const searchIcon = container.querySelector('svg[data-testid="SearchIcon"]');
        expect(searchIcon).toBeInTheDocument();
    });
});
