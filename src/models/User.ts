import { Pagination } from "./Pagination";

export interface UserQueryParams extends Pagination {}

export interface UserCreate {
  email: string;
  role: 'admin' | 'manager' | 'designer' | 'accountant' | 'custom' | string;
  permissions?: string[];
  templates?: string[];
  domains?: string[];
  requires_periodic_password_change?: boolean;
}

export interface UserUpdate {
  role?: 'admin' | 'manager' | 'designer' | 'accountant' | 'custom' | string;
  permissions?: string[];
  templates?: string[];
  domains?: string[];
  requires_periodic_password_change?: boolean;
}

export interface InviteQueryParams extends Pagination {}
