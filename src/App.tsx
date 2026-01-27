import { TABLE_COLUMNS_CONFIG_EMPLOYEES } from '@config/constants'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Search, Table, TableSkeleton } from '@shared/components'
import type { Employee } from '@shared/types/employee'
import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { axiosInstance } from './shared/services/api'
import type { ApiEmployee } from './shared/types/apiEmployee'

const App = () => {
  const [search, setSearch] = useState('')
  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await axiosInstance.get('users')
      const transformedData = response.data.map((employee: ApiEmployee) => ({
        ...employee,
        city: employee.address?.city || '',
        companyName: employee.company?.name || '',
      }))
      setEmployees(transformedData)
    }
    fetchEmployees()
  }, [])

  const filteredRows = useMemo(() => {
    if (!search) {
      return employees
    }
    const searchLower = search.toLowerCase()
    return employees.filter((employee: Employee) => {
      return (
        employee.name.toLowerCase().includes(searchLower)
      )
    })
  }, [search, employees])

  return (
    <div className="min-h-screen w-full bg-blue-50 flex items-center justify-center p-4">
      <Card className="max-w-7xl shadow-2xl mx-auto w-full" sx={{ borderRadius: 2 }}>
        <CardContent className="p-8">
          <Box className="flex flex-col gap-4">
            <Box className="flex flex-col gap-4">
              <Typography variant="h5" component="h1" className="font-bold text-gray-800">
                Colaboradores
              </Typography>
              <Box className="flex gap-2 items-end justify-between">
                <Search
                  placeholder="Pesquisar pelo nome do colaborador"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
                <Typography variant="body2" className="text-gray-600 mt-2">
                  Total de registros: {filteredRows.length}
                </Typography>
              </Box>
            </Box>
            {employees.length > 0 ? (
              <Box>
                <Table<Employee>
                  columns={TABLE_COLUMNS_CONFIG_EMPLOYEES}
                  rows={filteredRows}
                  defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
                />
              </Box>
            ) : (
              <Box>
                <TableSkeleton />
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </div >
  )
}

export default App
