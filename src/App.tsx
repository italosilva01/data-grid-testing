import { TABLE_COLUMNS_CONFIG_EMPLOYEES } from '@config/constants'
import { Box, Card, CardContent } from '@mui/material'
import { Header, Table, TableSkeleton } from '@shared/components'
import { Footer } from '@shared/components/Footer'
import type { Employee } from '@shared/types/employee'
import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { axiosInstance } from './shared/services/api'
import type { ApiEmployee } from './shared/types/apiEmployee'
import { ErrorState } from './shared/components/ErrorState'

const App = () => {
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [employees, setEmployees] = useState<Employee[]>([])

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setIsLoading(true)
        setHasError(false)
        const response = await axiosInstance.get('users')
        const transformedData = response.data.map((employee: ApiEmployee) => ({
          ...employee,
          city: employee.address?.city || '',
          companyName: employee.company?.name || '',
        }))
        setEmployees(transformedData)
      } catch {
        setHasError(true)
        setEmployees([])
      } finally {
        setIsLoading(false)
      }
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

  const renderContent = () => {
    if (isLoading) return <TableSkeleton />
    if (hasError) return <ErrorState />

    return (
      <Table<Employee>
        columns={TABLE_COLUMNS_CONFIG_EMPLOYEES}
        rows={filteredRows}
        defaultSorting={[{ columnName: 'name', direction: 'asc' }]}
      />
    )
  }

  return (
    <div className="min-h-screen w-full bg-blue-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="max-w-7xl shadow-2xl mx-auto w-full" sx={{ borderRadius: 2 }}>
          <CardContent className="p-8">
            <Box className="flex flex-col gap-4">
              <Header
                search={search}
                onSearchChange={(e) => setSearch(e.target.value)}
                totalRecords={filteredRows.length}
              />
              {renderContent()}
            </Box>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

export default App
