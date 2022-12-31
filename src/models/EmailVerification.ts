import { Pagination } from "./Pagination";

export interface EmailVerificationQueryParams extends Pagination {} // tslint:disable-line
export interface EmailVerificationResultQueryParams extends Pagination {
    result?: EmailVerificationResultType[];
}

export class EmailVerification {
    name: string;
    emails: string[];

    constructor(
        name: string,
        emails: string[],
    ) {
        this.name = name;
        this.emails = emails;
    }

    setName(name: string): EmailVerification {
      this.name = name;
      return this;
    }

    setEmails(emails: string[]): EmailVerification {
      this.emails = emails;
      return this;
    }
}

export enum EmailVerificationResultType {
    VALID = 'valid',
    CATCH_ALL = 'catch_all',
    MAILBOX_FULL = 'mailbox_full',
    ROLE_BASED = 'role_based',
    UNKNOWN = 'unknown',
    SYNTAX_ERROR = 'syntax_error',
    TYPO = 'typo',
    MAILBOX_NOT_FOUND = 'mailbox_not_found',
    DISPOSABLE = 'disposable',
    MAILBOX_BLOCKED = 'mailbox_blocked',
    FAILED = 'failed',
}
  