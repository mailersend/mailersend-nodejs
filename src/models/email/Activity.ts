import { Pagination } from "../Pagination";

export interface ActivityQueryParams extends Pagination {
  date_from: number | string;
  date_to: number | string;
  event?: ActivityEventType[];
}

export enum ActivityEventType {
  QUEUED = "queued",
  SENT = "sent",
  DELIVERED = "delivered",
  SOFT_BOUNCED = "soft_bounced",
  HARD_BOUNCED = "hard_bounced",
  OPENED = "opened",
  OPENED_UNIQUE = "opened_unique",
  CLICKED = "clicked",
  CLICKED_UNIQUE = "clicked_unique",
  UNSUBSCRIBED = "unsubscribed",
  SPAM_COMPLAINTS = "spam_complaints",
  SURVEY_OPENED = "survey_opened",
  SURVEY_SUBMITTED = "survey_submitted",
  DEFERRED = "deferred",
}
