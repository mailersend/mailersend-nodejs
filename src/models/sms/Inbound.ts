import { Pagination } from "../Pagination";

export interface SmsInboundQueryParams extends Pagination {
  sms_number_id?: string;
  enabled?: boolean;
}

export class SmsInbound {
  name: string;
  enabled?: boolean;
  sms_number_id?: string;
  forward_url: string;
  filter?: SmsInboundFilter;

  constructor(
    name: string,
    smsNumberId: string,
    forwardUrl: string,
    enabled?: boolean,
    filter?: SmsInboundFilter,
  ) {
    this.name = name;
    this.enabled = enabled;
    this.sms_number_id = smsNumberId;
    this.forward_url = forwardUrl;
    this.filter = filter;
  }

  setSmsNumberId(smsNumberId: string): SmsInbound {
    this.sms_number_id = smsNumberId;
    return this;
  }

  setName(name: string): SmsInbound {
    this.name = name;
    return this;
  }

  setEnabled(enabled: boolean): SmsInbound {
    this.enabled = enabled;
    return this;
  }

  setForwardUrl(forward_url: string): SmsInbound {
    this.forward_url = forward_url;
    return this;
  }

  setFilter(filter: SmsInboundFilter): SmsInbound {
    this.filter = filter;
    return this;
  }
}

export enum SmsComparerType {
  EQUAL = 'equal',
  NOT_EQUQL = 'not-equal',
  CONTAINS = 'contains',
  NOT_CONTAINS = 'not-contains',
  STARTS_WITH = 'starts-with',
  ENDS_WITH = 'ends-with',
  NOT_STARTS_WITH = 'not-starts-with',
  NOT_ENDS_WITH = 'not-ends-with',
}

export interface SmsInboundFilter {
  comparer: SmsComparerType;
  value: string;
}

export interface SmsInboundUpdate {
  name?: string;
  enabled?: boolean;
  sms_number_id?: string;
  forward_url?: string;
  filter?: SmsInboundFilter;
}
