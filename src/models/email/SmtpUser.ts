import { Pagination } from "../Pagination";

export interface SmtpUserParams {
  name: string;
  enabled?: boolean;
}

export interface SmtpUserQueryParams extends Pagination {}
