import { Pagination } from "../Pagination";

export interface ScheduleQueryParams extends Pagination {
    domain_id?: string;
    status?: 'scheduled' | 'sent' | 'error';
}
