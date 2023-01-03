export class EmailWebhook {
  url!: string;
  name!: string;
  events!: EmailWebhookEventType[];
  domain_id!: string; 
  enabled?: boolean;

  constructor(config?: IEmailWebhook) {
    if (config) {
      this.url = config.url;
      this.name = config.name;
      this.events = config.events;
      this.domain_id = config.domain_id;
      this.enabled = config.enabled;
    }
  }

  setUrl(url: string): EmailWebhook {
    this.url = url;
    return this;
  }

  setName(name: string): EmailWebhook {
    this.name = name;
    return this;
  }

  setEvents(events: any[]): EmailWebhook {
    this.events = events;
    return this;
  }

  /**
   * Set domain id
   * @param domainId - Existing hashed domain ID.
   */
  setDomainId(domainId: string): EmailWebhook {
    this.domain_id = domainId;
    return this;
  }

  setEnabled(enabled: boolean): EmailWebhook {
    this.enabled = enabled;
    return this;
  }
}

export enum EmailWebhookEventType {
  SENT = "activity.sent",
  DELIVERED = "activity.delivered",
  SOFT_BOUNCED = "activity.soft_bounced",
  HARD_BOUNCED = "activity.hard_bounced",
  OPENED = "activity.opened",
  CLICKED = "activity.clicked",
  UNSUBSCRIBED = "activity.unsubscribed",
  SPAM_COMPLIANT = "activity.spam_complaint",
}

export interface IEmailWebhook extends IEmailWebhookUpdate {
  domain_id: string;
}

export interface IEmailWebhookUpdate {
  url: string;
  name: string;
  events: EmailWebhookEventType[];
  enabled?: boolean;
}
