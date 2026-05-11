import { Recipient } from "./Recipient";
import { Sender } from "./Sender";
import { Attachment } from "./Attachment";
import { Personalization } from "../../modules/Email.module";

export class EmailParams {
  from?: Sender;
  to: Recipient[];
  cc?: Recipient[];
  bcc?: Recipient[];
  rcpt_to?: Recipient[];
  reply_to?: Recipient;
  subject?: string;
  text?: string;
  html?: string;
  send_at?: number | string;
  attachments?: Attachment[];
  template_id?: string;
  in_reply_to?: string;
  references?: string[];
  tags?: string[];
  personalization?: Personalization[];
  headers?: EmailHeader[];
  settings?: EmailSettings;
  precedence_bulk?: boolean;
  list_unsubscribe?: string;

  constructor(config?: any) {
    this.from = config?.from;
    this.to = config?.to;
    this.cc = config?.cc;
    this.bcc = config?.bcc;
    this.rcpt_to = config?.rcptTo;
    this.reply_to = config?.replyTo;
    this.in_reply_to = config?.inReplyTo;
    this.subject = config?.subject;
    this.text = config?.text;
    this.html = config?.html;
    this.send_at = config?.sendAt;
    this.attachments = config?.attachments;
    this.template_id = config?.templateId;
    this.tags = config?.tags;
    this.personalization = config?.personalization;
    this.references = config?.references;
    this.headers = config?.headers;
    this.settings = config?.settings;
    this.precedence_bulk = config?.precedenceBulk;
    this.list_unsubscribe = config?.listUnsubscribe;
  }

  setFrom(from: Sender): EmailParams {
    this.from = from;
    return this;
  }

  setTo(to: Recipient[]): EmailParams {
    this.to = to;
    return this;
  }

  setCc(cc: Recipient[]): EmailParams {
    this.cc = cc;
    return this;
  }

  setBcc(bcc: Recipient[]): EmailParams {
    this.bcc = bcc;
    return this;
  }

  setRcptTo(rcptTo: Recipient[]): EmailParams {
    this.rcpt_to = rcptTo;
    return this;
  }

  setReplyTo(replyTo: Recipient): EmailParams {
    this.reply_to = replyTo;
    return this;
  }

  setInReplyTo(inReplyTo: string): EmailParams {
    this.in_reply_to = inReplyTo;
    return this;
  }

  setSubject(subject: string): EmailParams {
    this.subject = subject;
    return this;
  }

  setText(text: string): EmailParams {
    this.text = text;
    return this;
  }

  setHtml(html: string): EmailParams {
    this.html = html;
    return this;
  }

  setSendAt(sendAt: number | string): EmailParams {
    this.send_at = sendAt;
    return this;
  }

  setAttachments(attachments: Attachment[]): EmailParams {
    this.attachments = attachments;
    return this;
  }

  setTemplateId(id: string): EmailParams {
    this.template_id = id;
    return this;
  }

  setTags(tags: string[]): EmailParams {
    this.tags = tags;
    return this;
  }

  setPersonalization(personalization: Personalization[]): EmailParams {
    this.personalization = personalization;
    return this;
  }

  setPrecedenceBulk(precedenceBulk: boolean): EmailParams {
    this.precedence_bulk = precedenceBulk;
    return this;
  }

  setSettings(settings: EmailSettings): EmailParams {
    this.settings = settings;
    return this;
  }

  setReferences(references: string[]): EmailParams {
    this.references = references;
    return this;
  }

  setHeaders(headers: EmailHeader[]): EmailParams {
    this.headers = headers;
    return this;
  }

  setListUnsubscribe(listUnsubscribe: string): EmailParams {
    this.list_unsubscribe = listUnsubscribe;
    return this;
  }
}

export interface EmailSettings {
  track_clicks?: boolean;
  track_opens?: boolean;
  track_content?: boolean;
}

export interface EmailHeader {
  name: string;
  value: string;
}
