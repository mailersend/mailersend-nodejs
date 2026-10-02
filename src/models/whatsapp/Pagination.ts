export interface WhatsAppPaginationLinks {
  first: string
  last: string | null
  prev: string | null
  next: string | null
}

export interface WhatsAppPaginationMeta {
  current_page: number
  from: number | null
  last_page: number
  path: string
  per_page: number
  to: number | null
  total: number
}

/**
 * There is no `total` and no `last_page`: request the next page until `links.next`
 * is `null` rather than counting pages up front.
 */
export interface WhatsAppSimplePaginationMeta {
  current_page: number
  from: number | null
  path: string
  per_page: number
  to: number | null
}
