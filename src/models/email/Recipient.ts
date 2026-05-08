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

export interface BlockListQueryParams extends Pagination {
  domain_id?: string;
}

export interface OnHoldListQueryParams extends Pagination {}

export interface BlockListRecipients {
  domain_id?: string;
  recipients?: string[];
  patterns?: string[];
}

export interface BlockListRecipientsPost {
  domain_id: string;
  recipients?: string[];
}

export enum BlockListType {
  BLOCK_LIST = 'blocklist',
  HARD_BOUNCES_LIST = 'hard-bounces',
  SPAM_COMPLAINTS_LIST = 'spam-complaints',
  UNSUBSCRIBES_LIST = 'unsubscribes',
  ON_HOLD_LIST = 'on-hold-list',
}
