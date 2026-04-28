export class EmailWebhook {
  url!: string;
  name!: string;
  events!: EmailWebhookEventType[];
  domain_id!: string;
  enabled?: boolean;
  version?: number;
  editable?: boolean;

  constructor(config?: IEmailWebhook) {
    if (config) {
      this.url = config.url;
      this.name = config.name;
      this.events = config.events;
      this.domain_id = config.domain_id;
      this.enabled = config.enabled;
      this.version = config.version;
      this.editable = config.editable;
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
  OPENED_UNIQUE = "activity.opened_unique",
  CLICKED = "activity.clicked",
  CLICKED_UNIQUE = "activity.clicked_unique",
  UNSUBSCRIBED = "activity.unsubscribed",
  SPAM_COMPLAINT = "activity.spam_complaint",
  SURVEY_OPENED = "activity.survey_opened",
  SURVEY_SUBMITTED = "activity.survey_submitted",
  IDENTITY_VERIFIED = "sender_identity.verified",
  MAINTENANCE_START = "maintenance.start",
  MAINTENANCE_END = "maintenance.end",
  DEFERRED = "activity.deferred",
  INBOUND_FORWARD_FAILED = "inbound_forward.failed",
  EMAIL_SINGLE_VERIFIED = "email_single.verified",
  EMAIL_LIST_VERIFIED = "email_list.verified",
  BULK_EMAIL_COMPLETED = "bulk_email.completed",
  RECIPIENT_ON_HOLD_ADDED = "recipient.on_hold_added",
  RECIPIENT_ON_HOLD_REMOVED = "recipient.on_hold_removed",
  EMAIL_LIST_CREATED = "email_list.created",
}

export interface IEmailWebhook extends IEmailWebhookUpdate {
  domain_id: string;
}

export interface IEmailWebhookUpdate {
  url: string;
  name: string;
  events: EmailWebhookEventType[];
  enabled?: boolean;
  version?: number;
  editable?: boolean;
}

export interface IEmailWebhookUpdateParams {
  url?: string;
  name?: string;
  events?: EmailWebhookEventType[];
  enabled?: boolean;
  version?: number;
}
