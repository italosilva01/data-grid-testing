import { useMemo } from 'react'
import type { Employee } from '@shared/types/employee'

interface UseEmployeeFiltersParams {
  employees: Employee[]
  search: string
}

interface UseEmployeeFiltersReturn {
  filteredEmployees: Employee[]
  totalFiltered: number
  hasResults: boolean
}

export const useEmployeeFilters = ({
  employees,
  search,
}: UseEmployeeFiltersParams): UseEmployeeFiltersReturn => {
  const filteredEmployees = useMemo(() => {
    if (!search) return employees

    const searchLower = search.toLowerCase()
    return employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchLower)
    )
  }, [search, employees])

  return {
    filteredEmployees,
    totalFiltered: filteredEmployees.length,
    hasResults: filteredEmployees.length > 0,
  }
}