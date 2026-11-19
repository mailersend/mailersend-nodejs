export type AccountStatus = "pending" | "approved" | "rejected" | "suspended";

export interface AccountUsage {
  used: number;
  limit: number;
}

export interface AccountEmails {
  sent: number;
  received: number;
  limit: number;
}

export interface AccountRateLimits {
  general: number;
  email: number;
  bulk_email: number;
  activity: number;
}

export interface AccountResources {
  domains: AccountUsage;
  users: AccountUsage;
  free_accountant_seat: AccountUsage;
  templates: AccountUsage;
  smtp_users: AccountUsage;
  api_tokens: AccountUsage;
  webhooks: {
    used: number;
    limit: number | null;
  };
}

export interface AccountSmsAddon {
  sent: number;
  received: number;
  limit: number;
}

export interface AccountWhatsAppAddon {
  sent: number;
  limit: number;
}

export interface AccountAddons {
  sms: AccountSmsAddon;
  /** `null` when the account has no WhatsApp add-on. */
  whatsapp: AccountWhatsAppAddon | null;
  phone_numbers: number;
  domain_spaces: number;
  data_retention_days: number;
  dedicated_ips: number;
}

export interface Account {
  name: string;
  status: AccountStatus;
  plan_type: string;
  data_retention_days: number;
  emails: AccountEmails;
  rate_limits: AccountRateLimits;
  resources: AccountResources;
  addons: AccountAddons;
}

export interface AccountResponse {
  data: Account;
}
