import { Pagination } from "../Pagination"
import { WhatsAppPaginationLinks, WhatsAppPaginationMeta } from "./Pagination"

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
 * Inherits `page` (Min: 1) and `limit` (Min: 10, Max: 100, Default: 25) from `Pagination`.
 */
export interface WhatsAppInboundMessageQueryParams extends Pagination {
  whatsapp_account_id?: string
  type?: WhatsAppInboundMessageType[]
  /** Unix timestamp or ISO 8601 datetime with a time, assumed `UTC`. Exclusive. */
  date_from?: number | string
  /** Unix timestamp or ISO 8601 datetime with a time, assumed `UTC`. Must be after `date_from`. Exclusive. */
  date_to?: number | string
}

export type WhatsAppInboundAttachmentStatus = "stored" | "pending" | "failed" | "expired"

export interface WhatsAppInboundAttachment {
  /** A temporary signed URL. `null` when the file is not stored. */
  url: string | null
  status: WhatsAppInboundAttachmentStatus
  mime_type?: string
  size?: number
  caption?: string
  filename?: string
  /** Present for stickers only. */
  animated?: boolean
}

/**
 * Fields inside `location`, `reaction`, `button` and `list_reply` are left out when WhatsApp does not send them.
 */
export interface WhatsAppInboundLocation {
  latitude?: number
  longitude?: number
  name?: string
  address?: string
}

export interface WhatsAppInboundReaction {
  emoji?: string
  message_id?: string
}

export interface WhatsAppInboundButton {
  text?: string
  payload?: string
}

export interface WhatsAppInboundListReply {
  id?: string
  title?: string
  description?: string
}

/**
 * Exactly one content field is present, determined by `type`. `contacts`, `interactive`,
 * `order`, `system`, `unknown` and `unsupported` carry the raw payload as sent by WhatsApp.
 */
export interface WhatsAppInboundMessage {
  id: string
  whatsapp_account_id: string
  from: string
  /** An empty string for a sender connected with a Meta virtual number. */
  to: string
  type: WhatsAppInboundMessageType
  received_at: string
  /** Present only when the message is a reply. */
  context?: { message_id: string }
  text?: { body: string }
  attachment?: WhatsAppInboundAttachment
  location?: WhatsAppInboundLocation
  contacts?: Record<string, any>[]
  reaction?: WhatsAppInboundReaction
  button?: WhatsAppInboundButton
  list_reply?: WhatsAppInboundListReply
  interactive?: Record<string, any>
  order?: Record<string, any>
  system?: Record<string, any>
  unknown?: Record<string, any>
  unsupported?: Record<string, any>
}

export interface WhatsAppInboundMessageListResponse {
  data: WhatsAppInboundMessage[]
  links: WhatsAppPaginationLinks
  meta: WhatsAppPaginationMeta
}

export interface WhatsAppInboundMessageResponse {
  data: WhatsAppInboundMessage
}
