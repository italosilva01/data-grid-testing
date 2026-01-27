import { TABLE_COLUMNS_CONFIG_EMPLOYEES } from '@config/constants'
import { Box, Card, CardContent } from '@mui/material'
import { Header, Table, TableSkeleton } from '@shared/components'
import { Footer } from '@shared/components/Footer'
import type { Employee } from '@shared/types/employee'
import './App.css'
import { ErrorState } from './shared/components/ErrorState'
import { useEmployees } from './shared/hooks/useEmployees'
import { useEmployeeFilters } from './shared/hooks/useEmployeeFilters'

const App = () => {
  const { employees, isLoading, hasError, search, setSearch } = useEmployees()
  const { filteredEmployees } = useEmployeeFilters({ employees, search })

  const renderContent = () => {
    if (isLoading) return <TableSkeleton />
    if (hasError) return <ErrorState />
    return (
      <Table<Employee>
        columns={TABLE_COLUMNS_CONFIG_EMPLOYEES}
        rows={filteredEmployees}
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
                totalRecords={filteredEmployees.length}
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
