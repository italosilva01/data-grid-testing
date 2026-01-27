import type { InputHTMLAttributes } from 'react';
import { Box, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Search = ({
    placeholder = 'Pesquisar',
    className = '',
    ...inputProps
}: SearchProps) => {
    return (
        <Box className={`flex items-center gap-2 bg-white rounded px-2 py-1 w-full max-w-xs shadow ${className}`}>
            <InputBase
                startAdornment={<SearchIcon />}
                placeholder={placeholder}
                inputProps={{ 'aria-label': 'search', ...inputProps }}
                className="flex-1 border border-black-200 rounded-md"
                sx={{
                    py: .5,
                    '& input': {
                        padding: 0
                    }
                }}
            />
        </Box>
    );
};
