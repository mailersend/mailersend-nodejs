export interface WhatsAppPaginationLinks {
  first: string
  last: string | null
  prev: string | null
  next: string | null
}

/**
 * There is no `total` and no `last_page`: request the next page until `links.next`
 * is `null` rather than counting pages up front.
 */
export interface WhatsAppSimplePaginationMeta {
  current_page: number
  current_page_url: string
  from: number | null
  path: string
  per_page: number
  to: number | null
}
