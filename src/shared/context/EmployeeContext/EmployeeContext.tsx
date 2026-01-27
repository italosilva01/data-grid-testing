import { useState, useEffect, type ReactNode } from 'react'
import { axiosInstance } from '@shared/services/api'
import type { Employee } from '@shared/types/employee'
import type { ApiEmployee } from '@shared/types/apiEmployee'
import { EmployeeContext } from './employee.context'

interface EmployeeProviderProps {
    children: ReactNode
}

export const EmployeeProvider = ({ children }: EmployeeProviderProps) => {
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [employees, setEmployees] = useState<Employee[]>([])

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

    useEffect(() => {
        fetchEmployees()
    }, [])

    return (
        <EmployeeContext.Provider
            value={{
                search,
                setSearch,
                isLoading,
                hasError,
                employees,
                refetch: fetchEmployees,
            }}
        >
            {children}
        </EmployeeContext.Provider>
    )
}

