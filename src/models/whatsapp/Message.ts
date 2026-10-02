import { Pagination } from "../Pagination"
import { WhatsAppPaginationLinks, WhatsAppPaginationMeta } from "./Pagination"

export type WhatsAppMessageStatus = "queued" | "sent" | "delivered" | "read" | "failed"

/**
 * Query parameters for `GET /v1/whatsapp/messages`.
 *
 * Inherits `page` (Min: 1) and `limit` (Min: 10, Max: 100, Default: 25) from `Pagination`.
 */
export interface WhatsAppMessageQueryParams extends Pagination {}

export interface WhatsAppMessageListItem {
  id: string
  /** `null` for a sender connected with a Meta virtual number. */
  from: string | null
  to: string[]
  whatsapp_account_id: string | null
  template_id: string | null
  created_at: string
}

export interface WhatsAppMessageActivity {
  status: WhatsAppMessageStatus
  created_at: string
}

export interface WhatsAppMessageRecipient {
  id: string
  to: string
  status: WhatsAppMessageStatus
  error_code: number | null
  error_message: string | null
  activity: WhatsAppMessageActivity[]
}

export interface WhatsAppMessage extends WhatsAppMessageListItem {
  recipients: WhatsAppMessageRecipient[]
}

export interface WhatsAppMessageListResponse {
  data: WhatsAppMessageListItem[]
  links: WhatsAppPaginationLinks
  meta: WhatsAppPaginationMeta
}

export interface WhatsAppMessageResponse {
  data: WhatsAppMessage
}
