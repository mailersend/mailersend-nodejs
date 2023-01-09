import { ActivityEventType } from "./Activity";
import { Pagination } from "../Pagination";

export interface AnalyticsQueryParams extends Pagination {
  date_from: number;
  date_to: number;
  recipient_id?: string;
  group_by?: AnalyticsGroupByType;
  tags?: string[];
  domain_id?: string;
  event?: ActivityEventType[];
}

export enum AnalyticsGroupByType {
  DAYS = "days",
  WEEKS = "weeks",
  MONTHS = "months",
  YEARS = "years"
}

