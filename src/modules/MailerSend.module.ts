import { EmailModule } from "./Email.module";
import { TokenModule } from "./Token.module";
import { EmailVerificationModule } from "./EmailVerification.module";
import { SMSModule } from "./SMS.module";

export class MailerSend {
  private readonly apiKey: string;
  private baseUrl: string = "https://api.mailersend.com/v1";
  sms: SMSModule;
  token: TokenModule;
  email: EmailModule;
  emailVerification: EmailVerificationModule;

  constructor(config: MailerSendConfig) {
    this.apiKey = config.apiKey;
    this.token = new TokenModule(config.apiKey, this.baseUrl);
    this.email = new EmailModule(config.apiKey, this.baseUrl);
    this.emailVerification = new EmailVerificationModule(config.apiKey, this.baseUrl);
    this.sms = new SMSModule(config.apiKey, this.baseUrl);
  }
}

export interface MailerSendConfig {
  apiKey: string;
}
