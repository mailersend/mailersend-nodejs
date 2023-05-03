import { Pagination } from "../Pagination";

export interface ActivityQueryParams extends Pagination {
  date_from?: number;
  date_to?: number;
  event?: ActivityEventType[];
}

export enum ActivityEventType {
  QUEUED = "queued",
  SENT = "sent",
  DELIVERED = "delivered",
  SOFT_BOUNCED = "soft_bounced",
  HARD_BOUNCED = "hard_bounced",
  JUNK = "junk",
  OPENED = "opened",
  CLICKED = "clicked",
  UNSUBSCRIBED = "unsubscribed",
  SPAM_COMPLAINTS = "spam_complaints",
}
