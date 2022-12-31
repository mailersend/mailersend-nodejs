import { EmailModule } from "./Email.module";
import { ActivityModule } from "./Activity.module";
import { AnalyticsModule } from "./Analytics.module";
import { DomainModule } from "./Domain.module";
import { InboundModule } from "./Inbound.module";
import { MessageModule } from "./Message.module";
import { ScheduleModule } from "./Schedule.module";

export class MailerSend {
  private readonly apiKey: string;
  private baseUrl: string = "http://api.mailersend.test:8080/v1";
  email: EmailModule;
  activity: ActivityModule;
  analytics: AnalyticsModule;
  domain: DomainModule;
  inbound: InboundModule;
  message: MessageModule;
  schedule: ScheduleModule;

  constructor(config: MailerSendConfig) {
    this.apiKey = config.apiKey;
    this.email = new EmailModule(config.apiKey, this.baseUrl);
    this.activity = new ActivityModule(config.apiKey, this.baseUrl);
    this.analytics = new AnalyticsModule(config.apiKey, this.baseUrl);
    this.domain = new DomainModule(config.apiKey, this.baseUrl);
    this.inbound = new InboundModule(config.apiKey, this.baseUrl);
    this.message = new MessageModule(config.apiKey, this.baseUrl);
    this.schedule = new ScheduleModule(config.apiKey, this.baseUrl);
  }
}

export interface MailerSendConfig {
  apiKey: string;
}
