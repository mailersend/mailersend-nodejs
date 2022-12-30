import { EmailModule } from "./Email.module";
import { ActivityModule } from "./Activity.module";
import { AnalyticsModule } from "./Analytics.module";
import { DomainModule } from "./Domain.module";

export class MailerSend {
  private readonly apiKey: string;
  private baseUrl: string = "http://api.mailersend.test:8080/v1";
  email: EmailModule;
  activity: ActivityModule;
  analytics: AnalyticsModule;
  domain: DomainModule;

  constructor(config: MailerSendConfig) {
    this.apiKey = config.apiKey;
    this.email = new EmailModule(config.apiKey, this.baseUrl);
    this.activity = new ActivityModule(config.apiKey, this.baseUrl);
    this.analytics = new AnalyticsModule(config.apiKey, this.baseUrl);
    this.domain = new DomainModule(config.apiKey, this.baseUrl);
  }
}

export interface MailerSendConfig {
  apiKey: string;
}
