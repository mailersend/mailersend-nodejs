export class SmsWebhook {
    url: string;
    name: string;
    events: SmsWebhookEventType[];
    sms_number_id: string;
    enabled?: boolean;

    constructor(
        name: string,
        url: string,
        events: SmsWebhookEventType[],
        smsNumberId: string,
        enabled?: boolean
    ) {
        this.url = url;
        this.name = name;
        this.events = events;
        this.sms_number_id = smsNumberId;
        this.enabled = enabled;
    }

    setUrl(url: string): SmsWebhook {
        this.url = url;
        return this;
    }

    setName(name: string): SmsWebhook {
        this.name = name;
        return this;
    }

    setEvents(events: SmsWebhookEventType[]): SmsWebhook {
        this.events = events;
        return this;
    }

    setSmsNumberId(smsNumberId: string): SmsWebhook {
        this.sms_number_id = smsNumberId;
        return this;
    }

    setEnabled(enabled: boolean): SmsWebhook {
        this.enabled = enabled;
        return this;
    }
}

export interface SmsWebhookUpdate {
    url?: string;
    name?: string;
    events?: SmsWebhookEventType[];
    enabled?: boolean;
}

export enum SmsWebhookEventType {
    SENT = "sms.sent",
    DELIVERED = "sms.delivered",
    FAILED = "sms.failed",
}
