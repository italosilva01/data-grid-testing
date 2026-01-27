import { use } from 'react'
import { EmployeeContext } from '@shared/context/EmployeeContext'

export const useEmployees = () => {
    const context = use(EmployeeContext)
    if (!context) {
        throw new Error('useEmployees must be used within EmployeeProvider')
    }
    return context
}