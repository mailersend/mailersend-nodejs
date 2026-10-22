import { Pagination } from "../Pagination"
import { WhatsAppPaginationLinks, WhatsAppSimplePaginationMeta } from "./Pagination"

export type WhatsAppActivityType = "queued" | "sent" | "delivered" | "read" | "failed"

/**
 * Query parameters for `GET /v1/whatsapp/activities`.
 *
 * Inherits `page` (Min: 1, Max: 100) and `limit` (Min: 1, Max: 100, Default: 25) from `Pagination`.
 */
export interface WhatsAppActivityQueryParams extends Pagination {
  whatsapp_item_id?: string
  whatsapp_message_id?: string
  /** The recipient's phone number in international format, WhatsApp username or BSUID. */
  recipient?: string
  type?: WhatsAppActivityType[]
  /** Unix timestamp or datetime with a time, assumed `UTC`. Exclusive. */
  date_from?: number | string
  /** Unix timestamp or datetime with a time, assumed `UTC`. Must be after `date_from`. Exclusive. */
  date_to?: number | string
}

export interface WhatsAppActivity {
  id: string
  whatsapp_item_id: string
  whatsapp_message_id: string
  whatsapp_account_id: string | null
  /** The sender's phone number, or its WhatsApp username when sent from the username or the sender has no phone number. `null` when the sender has neither. */
  from: string | null
  /** The recipient's phone number or BSUID. */
  to: string
  type: WhatsAppActivityType
  created_at: string
}

export interface WhatsAppActivityListResponse {
  data: WhatsAppActivity[]
  links: WhatsAppPaginationLinks
  meta: WhatsAppSimplePaginationMeta
}
