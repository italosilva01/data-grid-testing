export interface Employee extends Record<string, unknown> {
    id: string;
    name: string;
    email: string;
    phone: string;
    city: string;
    companyName: string;
}