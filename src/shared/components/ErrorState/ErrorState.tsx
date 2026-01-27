import { Box, Typography } from '@mui/material'

export const ErrorState = () => {
    return (
        <Box className="flex flex-col gap-2 min-h-40 text-center items-center justify-center">
            <Typography variant="body2" className="text-gray-600 mt-2">
                Erro ao buscar colaboradores
            </Typography>
            <Typography variant="body2" className="text-gray-600 mt-2">
                Tente novamente em alguns instantes.
            </Typography>
        </Box>
    )
}