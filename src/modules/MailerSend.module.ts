import { EmailModule } from "./Email.module";
import { TokenModule } from "./Token.module";
import { EmailVerificationModule } from "./EmailVerification.module";
import { SMSModule } from "./SMS.module";
import { OthersModule } from "./Others.module";
import { DmarcModule } from "./Dmarc.module";
import { UserModule } from "./User.module";
import { BlocklistMonitorModule } from "./BlocklistMonitor.module";
import { WhatsAppModule } from "./WhatsApp.module";

export const DEFAULT_API_VERSION = "2026-10";
const API_VERSION_PATTERN = /^(v1|\d{4}-(0[1-9]|1[0-2]))$/;

export class MailerSend {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  sms: SMSModule;
  token: TokenModule;
  email: EmailModule;
  emailVerification: EmailVerificationModule;
  others: OthersModule;
  dmarc: DmarcModule;
  user: UserModule;
  blocklistMonitor: BlocklistMonitorModule;
  whatsapp: WhatsAppModule;

  constructor(config: MailerSendConfig) {
    const apiVersion = config.apiVersion ?? DEFAULT_API_VERSION;

    if (!API_VERSION_PATTERN.test(apiVersion)) {
      throw new Error(`apiVersion must be "v1" or a dated version such as "${DEFAULT_API_VERSION}", got "${apiVersion}"`);
    }

    this.baseUrl = `https://api.mailersend.com/${apiVersion}`;
    this.apiKey = config.apiKey;
    this.token = new TokenModule(config.apiKey, this.baseUrl);
    this.email = new EmailModule(config.apiKey, this.baseUrl);
    this.emailVerification = new EmailVerificationModule(config.apiKey, this.baseUrl);
    this.sms = new SMSModule(config.apiKey, this.baseUrl);
    this.others = new OthersModule(config.apiKey, this.baseUrl);
    this.dmarc = new DmarcModule(config.apiKey, this.baseUrl);
    this.user = new UserModule(config.apiKey, this.baseUrl);
    this.blocklistMonitor = new BlocklistMonitorModule(config.apiKey, this.baseUrl);
    this.whatsapp = new WhatsAppModule(config.apiKey, this.baseUrl);
  }
}

export interface MailerSendConfig {
  apiKey: string;
  apiVersion?: string;
}
