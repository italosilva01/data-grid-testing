import { useState } from 'react';
import {
    SortingState,
    IntegratedSorting,
    PagingState,
    IntegratedPaging,

} from '@devexpress/dx-react-grid';
import type { Sorting } from '@devexpress/dx-react-grid';
import {
    Grid,
    Table as DevExtremeTable,
    TableHeaderRow,
    PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';
import { Paper } from '@mui/material';

export interface TableColumn {
    name: string;
    title: string;
}

export interface TableProps<T extends Record<string, unknown> = Record<string, unknown>> {
    columns: TableColumn[];
    rows: T[];
    defaultSorting?: Sorting[];
    defaultPageSize?: number;
    pageSizes?: number[];
    className?: string;
}

export const Table = <T extends Record<string, unknown>>({
    columns,
    rows,
    defaultSorting = [],
    defaultPageSize = 10,
    pageSizes = [5, 10, 15, 20],
    className = '',
}: TableProps<T>) => {
    const [sorting, setSorting] = useState<Sorting[]>(defaultSorting);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(defaultPageSize);

    const handleSortingChange = (newSorting: Sorting[]) => {
        setSorting(newSorting);
    };

    const handleCurrentPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handlePageSizeChange = (size: number) => {
        setPageSize(size);
        setCurrentPage(0);
    };

    return (
        <Paper className={`shadow-lg rounded-lg overflow-hidden ${className}`}>
            <Grid rows={rows} columns={columns}>
                <SortingState
                    sorting={sorting}
                    onSortingChange={handleSortingChange}
                />
                <IntegratedSorting />
                <PagingState
                    currentPage={currentPage}
                    onCurrentPageChange={handleCurrentPageChange}
                    pageSize={pageSize}
                    onPageSizeChange={handlePageSizeChange}
                />
                <IntegratedPaging />

                <DevExtremeTable
                    cellComponent={(props) => (
                        <DevExtremeTable.Cell
                            {...props}
                            className="px-4 py-3 text-gray-700"
                        />
                    )}
                />
                <TableHeaderRow
                    showSortingControls
                    cellComponent={(props) => (
                        <TableHeaderRow.Cell
                            {...props}
                            className="bg-gray-100 font-semibold text-gray-800"
                        />
                    )}
                />
                <PagingPanel pageSizes={pageSizes} />
            </Grid>
        </Paper>
    );
};
