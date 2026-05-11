import { Pagination } from "./Pagination";

export interface UserQueryParams extends Pagination {}

export interface UserCreate {
  email: string;
  role: UserRole | string;
  permissions?: UserPermission[] | string[];
  templates?: string[];
  domains?: string[];
  requires_periodic_password_change?: boolean;
}

export interface UserUpdate {
  role?: UserRole | string;
  permissions?: UserPermission[] | string[];
  templates?: string[];
  domains?: string[];
  requires_periodic_password_change?: boolean;
}

export interface InviteQueryParams extends Pagination {}

export enum UserRole {
  Admin = 'Admin',
  Manager = 'Manager',
  Designer = 'Designer',
  Accountant = 'Accountant',
  CustomUser = 'Custom User',
}

export enum UserPermission {
  ReadAllTemplates = 'read-all-templates',
  ReadOwnTemplates = 'read-own-templates',
  ManageTemplates = 'manage-template',
  ReadFilemanager = 'read-filemanager',
  ManageDomain = 'manage-domain',
  ManageInbound = 'manage-inbound',
  ManageWebhook = 'manage-webhook',
  ControlSendings = 'control-sendings',
  ControlTrackingOptions = 'control-tracking-options',
  AccessSmtpCredentials = 'access-smtp-credentials',
  ViewSmtpUsers = 'view-smtp-users',
  ManageSmtpUsers = 'manage-smtp-users',
  ReadRecipient = 'read-recipient',
  ReadActivity = 'read-activity',
  ReadEmail = 'read-email',
  ReadAnalytics = 'read-analytics',
  ReadSenderIdentities = 'read-sender-identities',
  ManageSenderIdentities = 'manage-sender-identities',
  ReadEmailVerification = 'read-email-verification',
  ManageEmailVerification = 'manage-email-verification',
  ManageSms = 'manage-sms',
  ReadSms = 'read-sms',
  ManageVerifiedRecipients = 'manage-verified-recipients',
  ViewSmsWebhooks = 'view-sms-webhooks',
  ManageSmsWebhooks = 'manage-sms-webhooks',
  ViewSmsInbound = 'view-sms-inbound',
  ManageSmsInbound = 'manage-sms-inbound',
  UpdatePlan = 'update-plan',
  ManageAccount = 'manage-account',
  ReadInvoice = 'read-invoice',
  ManageApiToken = 'manage-api-token',
  ReadSuppressions = 'read-suppressions',
  ManageSuppressions = 'manage-suppressions',
  ReadIpAddresses = 'read-ip-addresses',
  ManageIpAddresses = 'manage-ip-addresses',
  ReadErrorLog = 'read-error-log',
}
