import { EmailModule } from "./Email.module";

export class MailerSend {
  private readonly apiKey: string;
  private baseUrl: string = "http://api.mailersend.test:8080/v1";
  email: EmailModule;

  constructor(config: MailerSendConfig) {
    this.apiKey = config.apiKey;
    this.email = new EmailModule(config.apiKey, this.baseUrl);
  }
}

export interface MailerSendConfig {
  apiKey: string;
}
