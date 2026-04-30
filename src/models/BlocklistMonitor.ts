import { Pagination } from "./Pagination";

export interface BlocklistMonitorQueryParams extends Pagination {
  query?: string;
  sort_by?: 'name' | 'address' | 'created_at' | 'updated_at' | 'blocklisted';
  order?: 'asc' | 'desc';
}

export class BlocklistMonitor {
  address: string;
  name?: string;
  notify?: boolean;
  notify_email?: string;
  notify_address?: string;

  constructor(address: string) {
    this.address = address;
  }

  setAddress(address: string): BlocklistMonitor {
    this.address = address;
    return this;
  }

  setName(name: string): BlocklistMonitor {
    this.name = name;
    return this;
  }

  setNotify(notify: boolean): BlocklistMonitor {
    this.notify = notify;
    return this;
  }

  setNotifyEmail(notifyEmail: string): BlocklistMonitor {
    this.notify_email = notifyEmail;
    return this;
  }

  setNotifyAddress(notifyAddress: string): BlocklistMonitor {
    this.notify_address = notifyAddress;
    return this;
  }
}

export interface BlocklistMonitorUpdate {
  name?: string;
  notify?: boolean;
  notify_email?: string;
  notify_address?: string;
}
