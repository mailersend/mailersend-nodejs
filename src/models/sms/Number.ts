import { Pagination } from "../Pagination";

export interface SmsNumberQueryParams extends Pagination {
    paused?: boolean;
}
