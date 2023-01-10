import { Pagination } from "../Pagination";

export interface SmsActivityQueryParams extends Pagination {
  date_from?: number;
  date_to?: number;
  status?: SmsActivityStatusType[];
  sms_number_id?: string;
}

export enum SmsActivityStatusType {
  PROCESSED = "processed",
  QUEUED = "queued",
  SENT = "sent",
  DELIVERED = "delivered",
  FAILED = "failed",
}
