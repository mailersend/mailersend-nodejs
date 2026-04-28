import { Pagination } from "../Pagination";

export interface ActivityQueryParams extends Pagination {
  date_from: number;
  date_to: number;
  event?: ActivityEventType[];
  message_id?: string;
  recipient_email?: string;
}

export enum ActivityEventType {
  QUEUED = "queued",
  SENT = "sent",
  DELIVERED = "delivered",
  SOFT_BOUNCED = "soft_bounced",
  HARD_BOUNCED = "hard_bounced",
  JUNK = "junk",
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
