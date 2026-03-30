import { Pagination } from "../Pagination";

export class Dmarc {
  domain_id: string;

  constructor(domainId: string) {
    this.domain_id = domainId;
  }
}

export interface DmarcQueryParams extends Pagination {}

export interface DmarcUpdate {
  wanted_dmarc_record: string;
}
