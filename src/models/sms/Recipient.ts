import { Pagination } from "../Pagination";

export interface SmsRecipientQueryParams extends Pagination {
  status?: "active" | "opt_out";
  sms_number_id?: string;
}
