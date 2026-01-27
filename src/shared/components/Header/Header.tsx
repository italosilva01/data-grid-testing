import { Box, Typography } from '@mui/material'
import { Search } from '@shared/components'

export interface HeaderProps {
  search: string
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  totalRecords: number
}

export const Header = ({ search, onSearchChange, totalRecords }: HeaderProps) => {
  return (
    <Box className="flex flex-col gap-4">
      <Typography variant="h5" component="h1" className="font-bold text-gray-800">
        Colaboradores
      </Typography>
      <Box className="flex gap-2 items-end justify-between">
        <Search
          placeholder="Pesquisar pelo nome do colaborador"
          onChange={onSearchChange}
          value={search}
        />
        <Typography variant="body2" className="text-gray-600 mt-2">
          Total de registros: {totalRecords}
        </Typography>
      </Box>
    </Box>
  )
}
