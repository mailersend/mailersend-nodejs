import { Pagination } from "../Pagination";

export class Domain {
  name: string;
  return_path_subdomain?: string; 
  custom_tracking_subdomain?: string; 
  inbound_routing_subdomain?: string; 

  constructor(
    name: string,
    returnPathSubdomain?: string,
    customTrackingSubdomain?: string,
    inboundRoutingSubdomain?: string,
  ) {
    this.name = name;
    this.return_path_subdomain = returnPathSubdomain;
    this.custom_tracking_subdomain = customTrackingSubdomain;
    this.inbound_routing_subdomain = inboundRoutingSubdomain;
  }
}

export interface DomainQueryParams extends Pagination {
  verified?: boolean;
}

export interface DomainRecipientsQueryParams extends Pagination {} 

export interface DomainSettings {
  send_paused?: boolean;
  track_clicks?: boolean;
  track_opens?: boolean;
  track_unsubscribe?: boolean;
  track_unsubscribe_html?: string;
  track_unsubscribe_plain?: string;
  track_content?: boolean;
  custom_tracking_enabled?: boolean;
  custom_tracking_subdomain?: string;
}
