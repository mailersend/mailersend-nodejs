import { Pagination } from "../Pagination"
import { WhatsAppItem } from "./Item"
import { WhatsAppPaginationLinks, WhatsAppSimplePaginationMeta } from "./Pagination"

export type WhatsAppRecipientStatus = "active" | "invalid" | "suppressed" | "blocked"

/**
 * Query parameters for `GET /v1/whatsapp/recipients`.
 *
 * Inherits `page` (Min: 1, Max: 100) and `limit` (Min: 1, Max: 100, Default: 25) from `Pagination`.
 */
export interface WhatsAppRecipientQueryParams extends Pagination {
  status?: WhatsAppRecipientStatus
  /** The recipient's phone number in international format. */
  phone_number?: string
}

export interface WhatsAppRecipientListItem {
  id: string
  phone_number: string | null
  username: string | null
  status: WhatsAppRecipientStatus
  created_at: string
}

export interface WhatsAppRecipient extends WhatsAppRecipientListItem {
  /** The latest 25 items, newest first. */
  items: WhatsAppItem[]
}

export interface WhatsAppRecipientListResponse {
  data: WhatsAppRecipientListItem[]
  links: WhatsAppPaginationLinks
  meta: WhatsAppSimplePaginationMeta
}

export interface WhatsAppRecipientResponse {
  data: WhatsAppRecipient
}
