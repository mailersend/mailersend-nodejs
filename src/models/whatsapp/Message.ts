import { Pagination } from "../Pagination"
import { WhatsAppItem } from "./Item"
import { WhatsAppPaginationLinks, WhatsAppSimplePaginationMeta } from "./Pagination"

/**
 * Query parameters for `GET /v1/whatsapp/messages`.
 *
 * Inherits `page` (Min: 1, Max: 100) and `limit` (Min: 1, Max: 100, Default: 25) from `Pagination`.
 */
export interface WhatsAppMessageQueryParams extends Pagination {
  whatsapp_account_id?: string
  /** The sender's phone number in international format. */
  from?: string
  template_id?: string
  /** Unix timestamp or datetime with a time, assumed `UTC`. Exclusive. */
  date_from?: number | string
  /** Unix timestamp or datetime with a time, assumed `UTC`. Must be after `date_from`. Exclusive. */
  date_to?: number | string
}

export interface WhatsAppMessageListItem {
  id: string
  /** `null` for a sender connected with a Meta virtual number. */
  from: string | null
  to: string[]
  whatsapp_account_id: string | null
  template_id: string | null
  created_at: string
}

export interface WhatsAppMessage extends WhatsAppMessageListItem {
  /** One item per recipient. Can be empty right after the message is sent. */
  items: WhatsAppItem[]
}

export interface WhatsAppMessageListResponse {
  data: WhatsAppMessageListItem[]
  links: WhatsAppPaginationLinks
  meta: WhatsAppSimplePaginationMeta
}

export interface WhatsAppMessageResponse {
  data: WhatsAppMessage
}
