import { Pagination } from "../Pagination"
import { WhatsAppPaginationLinks, WhatsAppSimplePaginationMeta } from "./Pagination"

export type WhatsAppTemplateStatus =
  | "draft"
  | "pending"
  | "approved"
  | "rejected"
  | "archived"
  | "deleted"
  | "disabled"
  | "flagged"
  | "in_appeal"
  | "limit_exceeded"
  | "locked"
  | "paused"
  | "reinstated"
  | "pending_deletion"

export type WhatsAppTemplateCategory = "UTILITY" | "AUTHENTICATION" | "MARKETING"

/**
 * Query parameters for `GET /v1/whatsapp/templates`.
 *
 * Inherits `page` (Min: 1, Max: 100) and `limit` (Min: 1, Max: 100, Default: 25) from `Pagination`.
 */
export interface WhatsAppTemplateQueryParams extends Pagination {
  whatsapp_account_id?: string
  status?: WhatsAppTemplateStatus
  category?: WhatsAppTemplateCategory
  /** For example `en_US`. */
  language?: string
}

export interface WhatsAppTemplateButton {
  type: string
  text: string
  /** `null` unless the button opens a URL. */
  url: string | null
}

export interface WhatsAppTemplateComponents {
  /** `format` is `TEXT`, `IMAGE`, `VIDEO`, `DOCUMENT` or `LOCATION`, and `text` is `null` for a media header. */
  header: { format: string; text: string | null } | null
  body: { text: string | null } | null
  buttons: WhatsAppTemplateButton[]
}

export interface WhatsAppTemplate {
  id: string
  whatsapp_account_id: string
  /** The template name registered with Meta. */
  name: string
  readable_name: string | null
  category: WhatsAppTemplateCategory
  language: string
  /** Only `approved` templates can be sent. */
  status: WhatsAppTemplateStatus
  components: WhatsAppTemplateComponents
  created_at: string
  updated_at: string
}

export interface WhatsAppTemplateListResponse {
  data: WhatsAppTemplate[]
  links: WhatsAppPaginationLinks
  meta: WhatsAppSimplePaginationMeta
}

export interface WhatsAppTemplateResponse {
  data: WhatsAppTemplate
}
