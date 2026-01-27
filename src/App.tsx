import { useMemo, useState } from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'
import { Search, Table } from '@shared/components'
import type { Employee } from '@shared/types/employee'
import { TABLE_COLUMNS, EXAMPLE_ROWS, PAGE_SIZES_OPTIONS, DEFAULT_TABLE_PAGE_SIZE } from '@config/constants'
import './App.css'

const App = () => {
  const [search, setSearch] = useState('')

  const filteredRows = useMemo(() => {
    if (!search) {
      return EXAMPLE_ROWS
    }
    const searchLower = search.toLowerCase()
    return EXAMPLE_ROWS.filter((employee: Employee) => {
      return (
        employee.name.toLowerCase().includes(searchLower)
      )
    })
  }, [search])

  return (
    <div className="min-h-screen w-full bg-blue-50 flex items-center justify-center p-4">
      <Card className="max-w-7xl shadow-2xl mx-auto w-full" sx={{ borderRadius: 2 }}>
        <CardContent className="p-8">
          <Box className="flex flex-col gap-4">
            <Box>
              <Typography variant="h5" component="h1" className="font-bold text-gray-800">
                Colaboradores
              </Typography>
              <Box className="flex gap-2 items-end justify-between">
                <Search
                  placeholder="Pesquisar por colaborador"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
                <Typography variant="body2" className="text-gray-600 mt-2">
                  Total de registros: {filteredRows.length}
                </Typography>
              </Box>
            </Box>

            <Box>
              <Table<Employee>
                columns={TABLE_COLUMNS}
                rows={filteredRows}
                defaultPageSize={DEFAULT_TABLE_PAGE_SIZE}
                pageSizes={PAGE_SIZES_OPTIONS}
                defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div >
  )
}

export default App
