import type { Address } from "./address";
import type { Company } from "./company";

export interface ApiEmployee {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: Address;
    company: Company;
  }