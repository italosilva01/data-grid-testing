import type { Company } from "./company";

export interface Employee extends Record<string, unknown> {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    company: Company;
}