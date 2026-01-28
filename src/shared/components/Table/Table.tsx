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
import { Paper, Box, Typography } from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { DEFAULT_TABLE_PAGE_SIZE, PAGE_SIZES_OPTIONS } from '@/config/constants';

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
    defaultPageSize = DEFAULT_TABLE_PAGE_SIZE,
    pageSizes = PAGE_SIZES_OPTIONS,
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
    if (rows.length === 0) {
        return (
            <Paper className={`shadow-lg rounded-lg overflow-hidden ${className}`}>
                <Box className="flex flex-col items-center justify-center h-full !p-5">
                    <Typography>Nenhum registro encontrado</Typography>
                    <Typography>Faça outra busca ou atualize a página</Typography>
                    <SentimentVeryDissatisfiedIcon className="text-gray-500 text-6xl!" />
                </Box>
            </Paper>
        )
    }

    return (
        <Paper className={`shadow-lg rounded-lg overflow-hidden ${className}`}>
            <Box>
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
                                value={props.value ?? '-'}
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
            </Box>
        </Paper>
    );
};
