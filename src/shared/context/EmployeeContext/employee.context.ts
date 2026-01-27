import { createContext } from 'react'
import type { Employee } from '@shared/types/employee'

export interface EmployeeContextData {
    search: string
    setSearch: (search: string) => void
    isLoading: boolean
    hasError: boolean
    employees: Employee[]
    refetch: () => Promise<void>
}

export const EmployeeContext = createContext<EmployeeContextData | undefined>(undefined)
