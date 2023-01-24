import { Pagination } from "../Pagination";

export class Identity {
    domain_id: string;
    email: string;
    name: string;
    personal_note?: string;
    reply_to_name?: string;
    reply_to_email?: string;
    add_note?: boolean;

    constructor(
        domainId: string,
        email: string,
        name: string,
        personalNote?: string,
        replyToName?: string,
        replyToEmail?: string,
        addNote?: boolean,
    ) {
        this.domain_id = domainId;
        this.email = email;
        this.name = name;
        this.personal_note = personalNote;
        this.reply_to_name = replyToName;
        this.reply_to_email = replyToEmail;
        this.add_note = addNote;
    }

    setDomainId(domainId: string): Identity {
      this.domain_id = domainId;
      return this;
    }

    setEmail(email: string): Identity {
      this.email = email;
      return this;
    }

    setName(name: string): Identity {
      this.name = name;
      return this;
    }

    setPersonalNote(personalNote: string): Identity {
      this.personal_note = personalNote;
      return this;
    }

    setReplyToName(replyToName: string): Identity {
      this.reply_to_name = replyToName;
      return this;
    }

    setReplyToEmail(replyToEmail: string): Identity {
      this.reply_to_email = replyToEmail;
      return this;
    }

    setAddNote(addNote: boolean): Identity {
      this.add_note = addNote;
      return this;
    }
}

export interface IdentityQueryParams extends Pagination {
    domain_id?: string;
}

export interface IdentityUpdate {
    domain_id?: string;
    email?: string;
    name?: string;
    personal_note?: string;
    reply_to_name?: string;
    reply_to_email?: string;
    add_note?: boolean;
  }