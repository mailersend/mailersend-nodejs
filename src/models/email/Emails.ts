import { Pagination } from "../Pagination";
import { ActivityEventType } from "./Activity";
import { EmailHeader } from "./EmailParams";

export enum EmailStatus {
  QUEUED = "queued",
  SENT = "sent",
  REJECTED = "rejected",
  DELIVERED = "delivered",
}

export enum EmailInteraction {
  OPENED = "opened",
  CLICKED = "clicked",
  UNSUBSCRIBED = "unsubscribed",
  COMPLAINED = "complained",
  NO_INTERACTION = "no_interaction",
}

export enum EmailSuppressionReason {
  ON_HOLD = "on_hold",
  HARD_BOUNCED = "hard_bounced",
  UNSUBSCRIBED = "unsubscribed",
  SPAM_COMPLAINED = "spam_complained",
  BLOCKLISTED = "blocklisted",
}

/**
 * `no_interaction` is a filter value only — it is never returned in a response.
 */
export type EmailRecordedInteraction = Exclude<EmailInteraction, EmailInteraction.NO_INTERACTION>;

/**
 * Query parameters for `GET /v1/emails`.
 *
 * Inherits `page` (Min: 1, Max: 100) and `limit` (Min: 10, Max: 1000,
 * Default: 25) from `Pagination`.
 */
export interface EmailsQueryParams extends Pagination {
  domain_id: string;
  date_from: number | string;
  date_to: number | string;
  status?: EmailStatus[];
  interaction?: EmailInteraction[];
  recipient_email?: string;
  message_id?: string;
  template_id?: string;
  subject?: string;
  tag?: string;
}

/**
 * A row in `GET /v1/emails`. List rows carry no `recipient` and no `activity`
 * — use `mailerSend.email.single()` for those.
 */
export interface EmailListItem {
  id: string;
  from: string;
  to: string;
  subject: string;
  /** Always `null` in list rows — use `single()` to read the content. */
  text: string | null;
  /** Always `null` in list rows — use `single()` to read the content. */
  html: string | null;
  template_id: string | null;
  domain_id: string;
  message_id: string;
  status: EmailStatus;
  tags: string[] | null;
  interaction: EmailRecordedInteraction[];
  suppression_reason: EmailSuppressionReason | null;
  created_at: string;
  updated_at: string;
  headers: EmailHeader[] | null;
}

export interface EmailListLinks {
  first: string;
  /** Always `null` — the API does not report a last page for this endpoint. */
  last: string | null;
  prev: string | null;
  next: string | null;
}

/**
 * There is no `total` and no `last_page`: request the next page until `links.next`
 * is `null` rather than counting pages up front.
 */
export interface EmailListMeta {
  current_page: number;
  current_page_url: string;
  from: number | null;
  path: string;
  per_page: number;
  to: number | null;
}

export interface EmailListResponse {
  data: EmailListItem[];
  links: EmailListLinks;
  meta: EmailListMeta;
}

export interface EmailActivityEvent {
  id: string;
  type: ActivityEventType;
  created_at: string;
  suppression_reason?: EmailSuppressionReason;
}

export interface EmailRecipient {
  id: string;
  email: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface Email {
  id: string;
  from: string;
  to: string;
  subject: string;
  text: string | null;
  html: string | null;
  template_id: string | null;
  domain_id: string;
  message_id: string;
  status: EmailStatus;
  tags: string[] | null;
  interaction: EmailRecordedInteraction[];
  suppression_reason: EmailSuppressionReason | null;
  created_at: string;
  updated_at: string;
  recipient: EmailRecipient;
  headers: EmailHeader[] | null;
  activity: EmailActivityEvent[];
}

export interface EmailResponse {
  data: Email;
}
