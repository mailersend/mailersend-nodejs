import { Pagination } from "../Pagination";

export interface InboundQueryParams extends Pagination {
    domain_id?: string;
}

export class Inbound {
    name: string;
    domain_enabled: boolean; 
    domain_id?: string; 
    inbound_domain?: string; 
    inbound_address?: string; 
    inbound_subdomain?: string; 
    inbound_priority?: number;
    forwards?: InboundForward[];
    match_filter?: MatchFilter; 
    catch_filter?: CatchFilter; 

    constructor(
        name: string,
        domainEnabled: boolean,
        domainId?: string,
        inboundDomain?: string,
        inboundAddress?: string,
        inboundSubdomain?: string,
        inboundPriority?: number,
        forwards?: InboundForward[],
        matchFilter?: MatchFilter,
        catchFilter?: CatchFilter,
    ) {
        this.name = name;
        this.domain_enabled = domainEnabled;
        this.domain_id = domainId;
        this.inbound_domain = inboundDomain;
        this.inbound_address = inboundAddress;
        this.inbound_subdomain = inboundSubdomain;
        this.inbound_priority = inboundPriority;
        this.forwards = forwards;
        this.match_filter = matchFilter;
        this.catch_filter = catchFilter;
    }

    setDomainId(domainId: string): Inbound {
      this.domain_id = domainId;
      return this;
    }

    setName(name: string): Inbound {
      this.name = name;
      return this;
    }

    setDomainEnabled(domainEnabled: boolean): Inbound {
      this.domain_enabled = domainEnabled;
      return this;
    }

    setInboundDomain(inboundDomain: string): Inbound {
      this.inbound_domain = inboundDomain;
      return this;
    }

    setInboundSubDomain(inboundSubdomain: string): Inbound {
      this.inbound_subdomain = inboundSubdomain;
      return this;
    }

    setInboundPriority(inboundPriority: number): Inbound {
      this.inbound_priority = inboundPriority;
      return this;
    }

    setInboundAddress(inboundAddress: string): Inbound {
      this.inbound_address = inboundAddress;
      return this;
    }

    setForwards(forwards: InboundForward[]): Inbound {
      this.forwards = forwards;
      return this;
    }

    setMatchFilter(matchFilter: MatchFilter): Inbound {
      this.match_filter = matchFilter;
      return this;
    }

    setCatchFilter(catchFilter: CatchFilter): Inbound {
      this.catch_filter = catchFilter;
      return this;
    }
}

export interface InboundForward {
    type: 'webhook' | 'email';
    value: string;
}

export enum InboundFilterType {
    CATCH_ALL = 'catch_all',
    CATCH_RECIPIENT = 'catch_recipient',
    MATCH_ALL = 'match_all',
    MATCH_SENDER = 'match_sender',
    MATCH_DOMAIN = 'match_domain',
    MATCH_HEADER = 'match_header',
}

export enum ComparerType {
    EQUAL = 'equal',
    NOT_EQUQL = 'not-equal',
    CONTAINS = 'contains',
    NOT_CONTAINS = 'not-contains',
    STARTS_WITH = 'starts-with',
    ENDS_WITH = 'ends-with',
    NOT_STARTS_WITH = 'not-starts-with',
    NOT_ENDS_WITH = 'not-ends-with',
}

export interface InboundFilter {
    comparer: ComparerType;
    value: string;
}

export interface MatchInboundFilter extends InboundFilter {
    key?: string;
}

export interface CatchFilter {
    type: InboundFilterType;
    filters?: InboundFilter[];
}

export interface MatchFilter {
    type: InboundFilterType;
    filters?: MatchInboundFilter[];
}
