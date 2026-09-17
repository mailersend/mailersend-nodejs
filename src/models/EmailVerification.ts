import { Pagination } from "./Pagination";

export interface EmailVerificationQueryParams extends Pagination {}
export interface EmailVerificationSingleQueryParams {
    detailed?: boolean;
    page?: number;
    limit?: number;
}
export interface EmailVerificationResultQueryParams extends Pagination {
    results?: EmailVerificationResultType[];
}

export class EmailVerification {
    name: string;
    emails: string[];
    list_id?: string;
    verify?: boolean;

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

    setListId(listId: string): EmailVerification {
      this.list_id = listId;
      return this;
    }

    setVerify(verify: boolean): EmailVerification {
      this.verify = verify;
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
  