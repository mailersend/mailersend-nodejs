import { EmailParams } from "../models";
import { RequestService, APIResponse } from "../services/request.service";

import { ActivityModule } from "./email/Activity.module";
import { AnalyticsModule } from "./email/Analytics.module";
import { DomainModule } from "./email/Domain.module";
import { InboundModule } from "./email/Inbound.module";
import { MessageModule } from "./email/Message.module";
import { ScheduleModule } from "./email/Schedule.module";
import { RecipientModule } from "./email/Recipient.module";
import { TemplateModule } from "./email/Template.module";
import { EmailWebhookModule } from "./email/Webhook.module";

export class EmailModule extends RequestService {
  activity: ActivityModule;
  analytics: AnalyticsModule;
  domain: DomainModule;
  inbound: InboundModule;
  message: MessageModule;
  schedule: ScheduleModule;
  recipient: RecipientModule;
  template: TemplateModule;
  webhook: EmailWebhookModule;

  constructor(apiKey: string, baseUrl: string) {
    super(apiKey, baseUrl);

    this.activity = new ActivityModule(apiKey, baseUrl);
    this.analytics = new AnalyticsModule(apiKey, baseUrl);
    this.domain = new DomainModule(apiKey, baseUrl);
    this.inbound = new InboundModule(apiKey, baseUrl);
    this.message = new MessageModule(apiKey, baseUrl);
    this.schedule = new ScheduleModule(apiKey, baseUrl);
    this.recipient = new RecipientModule(apiKey, baseUrl);
    this.template = new TemplateModule(apiKey, baseUrl);
    this.webhook = new EmailWebhookModule(apiKey, baseUrl);
  }

  async send(params: EmailParams): Promise<APIResponse> {
    return await this.post<EmailParams>("/email", params);
  }

  async sendBulk(params: EmailParams[]): Promise<APIResponse> {
    return await this.post<EmailParams[]>("/bulk-email", params);
  }

  async getBulkStatus(bulkId: string): Promise<APIResponse> {
    return await this.get(`/bulk-email/${bulkId}`);
  }
}

export interface Variable {
  email: string;
  substitutions: VariableSubstitution[];
}

export interface VariableSubstitution {
  var: string;
  value: string;
}

export interface Personalization {
  email: string;
  data: {
    [key: string]: string;
  };
}
