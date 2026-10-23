import { Pagination } from "../Pagination";

export interface SmsActivityQueryParams extends Pagination {
  date_from?: number | string;
  date_to?: number | string;
  status?: SmsActivityStatusType[];
  sms_number_id?: string;
}

export enum SmsActivityStatusType {
  QUEUED = "queued",
  SENT = "sent",
  DELIVERED = "delivered",
  FAILED = "failed",
  PROCESSED = "processed",
}
