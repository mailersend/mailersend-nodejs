import { Pagination } from "../Pagination"
import { WhatsAppPaginationLinks, WhatsAppSimplePaginationMeta } from "./Pagination"

export type WhatsAppInboundMessageType =
  | "text"
  | "image"
  | "audio"
  | "video"
  | "document"
  | "sticker"
  | "location"
  | "contacts"
  | "interactive"
  | "button"
  | "order"
  | "reaction"
  | "system"
  | "unknown"
  | "unsupported"

/**
 * Query parameters for `GET /v1/whatsapp/inbound-messages`.
 *
 * Inherits `page` (Min: 1, Max: 100) and `limit` (Min: 1, Max: 100, Default: 25) from `Pagination`.
 */
export interface WhatsAppInboundMessageQueryParams extends Pagination {
  whatsapp_account_id?: string
  /** The customer's phone number in international format, or their BSUID. */
  from?: string
  type?: WhatsAppInboundMessageType[]
  /** Unix timestamp or datetime with a time, assumed `UTC`. Exclusive. */
  date_from?: number | string
  /** Unix timestamp or datetime with a time, assumed `UTC`. Must be after `date_from`. Exclusive. */
  date_to?: number | string
}

export interface WhatsAppInboundMessage {
  id: string
  whatsapp_account_id: string
  /** The customer's phone number, or their BSUID. */
  from: string
  /** An empty string for a sender connected with a Meta virtual number. */
  to: string
  type: WhatsAppInboundMessageType
  received_at: string
  /** The content of the message. Its shape depends on `type`. */
  meta: Record<string, unknown> | null
  /** Present only when the message is a reply. */
  context?: { message_id: string }
}

export interface WhatsAppInboundMessageListResponse {
  data: WhatsAppInboundMessage[]
  links: WhatsAppPaginationLinks
  meta: WhatsAppSimplePaginationMeta
}

export interface WhatsAppInboundMessageResponse {
  data: WhatsAppInboundMessage
}
