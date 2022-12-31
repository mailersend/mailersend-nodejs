import { Sender } from "./Sender";
import { Pagination } from "./Pagination";

export class Recipient extends Sender {
  constructor(email: string, name?: string) {
    super(email, name);
  }
}
export interface RecipientsQueryParams extends Pagination {
  domain_id?: string; // tslint:disable-line
}

export interface BlockListRecipients {
  domain_id?: string;
  recipients?: string[];
  patterns?: string[];
}

export enum BlockListType {
  BLOCK_LIST = 'blocklist',
  HARD_BOUNCES_LIST = 'hard-bounces',
  SPAM_COMPLAINTS_LIST = 'spam-complaints',
  UNSUBSCRIBES_LIST = 'unsubscribes',
}
