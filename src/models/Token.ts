export class Token {
  name: string;
  domain_id: string; 
  scopes: TokenScopeType[];

  constructor(name: string, domainId: string, scopes: TokenScopeType[]) {
    this.name = name;
    this.domain_id = domainId;
    this.scopes = scopes;
  }

  setName(name: string): Token {
    this.name = name;
    return this
  }

  setDomainId(domainId: string): Token {
    this.domain_id = domainId;
    return this
  }

  setScopes(scopes: TokenScopeType[]): Token {
    this.scopes = scopes;
    return this
  }
}

export enum TokenScopeType {
  EMAIL_FULL = "email_full",
  DOMAINS_FULL = "domains_full",
  ACTIVITY_READ = "activity_read",
  ACTIVITY_FULL = "activity_full",
  ANALYTICS_READ = "analytics_read",
  ANALYTICS_FULL = "analytics_full",
  TOKENS_FULL = "tokens_full",
  WEBHOOKS_FULL = "webhooks_full",
  TEMPLATES_FULL = "templates_full",
  SUPPRESSIONS_READ = 'suppressions_read',
  SUPPRESSIONS_FULL = 'suppressions_full',
  SMS_READ = 'sms_read',
  SMS_FULL = 'sms_full',
  EMAIL_VERIFICATION_READ = 'email_verification_read',
  EMAIL_VERIFICATION_FULL = 'email_verification_full',
  INBOUNDS_FULL = 'inbounds_full',
  RECIPIENTS_READ = 'recipients_read',
  RECIPIENTS_FULL = 'recipients_full',
}

export interface TokenUpdates {
  status: "pause" | "unpause";
}
