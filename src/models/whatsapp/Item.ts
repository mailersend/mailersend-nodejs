import { Pagination } from "../Pagination"
import { WhatsAppActivityType } from "./Activity"
import { WhatsAppPaginationLinks, WhatsAppSimplePaginationMeta } from "./Pagination"
import { WhatsAppRecipientListItem } from "./Recipient"

export type WhatsAppItemStatus = "queued" | "sent" | "delivered" | "read" | "failed"

/**
 * Query parameters for `GET /v1/whatsapp/items`.
 *
 * Inherits `page` (Min: 1, Max: 100) and `limit` (Min: 1, Max: 100, Default: 25) from `Pagination`.
 */
export interface WhatsAppItemQueryParams extends Pagination {
  /** The recipient's phone number in international format, WhatsApp username or BSUID. */
  recipient?: string
  whatsapp_message_id?: string
  status?: WhatsAppItemStatus[]
  whatsapp_account_id?: string
  /** The sender's phone number in international format. */
  from?: string
  template_id?: string
  /** Unix timestamp or datetime with a time, assumed `UTC`. Exclusive. */
  date_from?: number | string
  /** Unix timestamp or datetime with a time, assumed `UTC`. Must be after `date_from`. Exclusive. */
  date_to?: number | string
}

export interface WhatsAppItem {
  id: string
  whatsapp_message_id: string
  whatsapp_account_id: string | null
  /** The sender's phone number, or its WhatsApp username when sent from the username or the sender has no phone number. `null` when the sender has neither. */
  from: string | null
  /** The recipient's phone number or BSUID. */
  to: string | null
  status: WhatsAppItemStatus
  template_id: string | null
  template_name: string | null
  error_code: number | null
  error_message: string | null
  created_at: string
}

export interface WhatsAppItemActivity {
  type: WhatsAppActivityType
  created_at: string
}

export interface WhatsAppItemDetail extends WhatsAppItem {
  recipient: WhatsAppRecipientListItem | null
  /** Ordered by status (`queued`, `sent`, `delivered`, `read`, `failed`), then by `created_at`. */
  activity: WhatsAppItemActivity[]
}

export interface WhatsAppItemListResponse {
  data: WhatsAppItem[]
  links: WhatsAppPaginationLinks
  meta: WhatsAppSimplePaginationMeta
}

export interface WhatsAppItemResponse {
  data: WhatsAppItemDetail
}
