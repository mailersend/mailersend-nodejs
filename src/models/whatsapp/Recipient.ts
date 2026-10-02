import { Pagination } from "../Pagination"
import { WhatsAppMessageStatus } from "./Message"
import { WhatsAppPaginationLinks, WhatsAppSimplePaginationMeta } from "./Pagination"

export type WhatsAppRecipientStatus = "active" | "invalid" | "suppressed" | "blocked"

/**
 * Query parameters for `GET /v1/whatsapp/recipients`.
 *
 * Inherits `page` (Min: 1) and `limit` (Min: 10, Max: 100, Default: 25) from `Pagination`.
 */
export interface WhatsAppRecipientQueryParams extends Pagination {
  status?: WhatsAppRecipientStatus
}

export interface WhatsAppRecipientListItem {
  id: string
  phone_number: string | null
  username: string | null
  bsuid: string | null
  status: WhatsAppRecipientStatus
  created_at: string
}

export interface WhatsAppRecipientMessage {
  id: string
  whatsapp_message_id: string
  status: WhatsAppMessageStatus
  template_name: string
  error_code: number | null
  error_message: string | null
  created_at: string
}

export interface WhatsAppRecipient extends WhatsAppRecipientListItem {
  /** The latest 25 messages, newest first. */
  messages: WhatsAppRecipientMessage[]
}

export interface WhatsAppRecipientListResponse {
  data: WhatsAppRecipientListItem[]
  links: WhatsAppPaginationLinks
  meta: WhatsAppSimplePaginationMeta
}

export interface WhatsAppRecipientResponse {
  data: WhatsAppRecipient
}
