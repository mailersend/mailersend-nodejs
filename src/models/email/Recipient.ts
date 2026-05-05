import { Sender } from "./Sender";
import { Pagination } from "../Pagination";

export class Recipient extends Sender {
  constructor(email: string, name?: string) {
    super(email, name);
  }
}
export interface RecipientsQueryParams extends Pagination {
  domain_id?: string;
}

/** Query params for GET suppression lists that support domain_id filtering. */
export interface BlockListQueryParams extends Pagination {
  domain_id?: string;
}

/** Query params for GET /v1/suppressions/on-hold-list — domain_id is NOT supported. */
export interface OnHoldListQueryParams extends Pagination {}

/** Used for POST /v1/suppressions/blocklist — domain_id is optional. */
export interface BlockListRecipients {
  domain_id?: string;
  recipients?: string[];
  patterns?: string[];
}

/** Used for POST /v1/suppressions/hard-bounces, spam-complaints, and unsubscribes — domain_id is required. */
export interface BlockListRecipientsPost {
  domain_id: string;
  recipients?: string[];
  patterns?: string[];
}

export enum BlockListType {
  BLOCK_LIST = 'blocklist',
  HARD_BOUNCES_LIST = 'hard-bounces',
  SPAM_COMPLAINTS_LIST = 'spam-complaints',
  UNSUBSCRIBES_LIST = 'unsubscribes',
  ON_HOLD_LIST = 'on-hold-list',
}
