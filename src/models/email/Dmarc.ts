import { Pagination } from "../Pagination";

export class Dmarc {
  domain_id: string;

  constructor(domainId: string) {
    this.domain_id = domainId;
  }
}

export interface DmarcQueryParams extends Pagination {
  query?: string;
  sort_by?: 'created_at' | 'updated_at' | 'dmarc_valid' | 'spf_status';
  order?: 'asc' | 'desc';
}

export interface DmarcReportQueryParams extends Pagination {
  date_from?: string;
  date_to?: string;
  search?: string;
  category?: string;
  report_source?: string;
}

export interface DmarcReportSourcesQueryParams {
  date_from: string;
  date_to: string;
  status?: 'accepted' | 'rejected' | 'quarantined';
}

export interface DmarcUpdate {
  wanted_dmarc_record: string;
}
