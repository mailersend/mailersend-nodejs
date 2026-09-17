import { ActivityEventType } from "./Activity";

export interface AnalyticsOpensQueryParams {
  date_from: number;
  date_to: number;
  recipient_id?: string[];
  tags?: string[];
  domain_id?: string;
}

export interface AnalyticsDateQueryParams extends AnalyticsOpensQueryParams {
  group_by?: AnalyticsGroupByType;
  event?: ActivityEventType[];
}

export enum AnalyticsGroupByType {
  DAYS = "days",
  WEEKS = "weeks",
  MONTHS = "months",
  YEARS = "years"
}

