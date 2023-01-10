import { Recipient } from "./Recipient";
import { Sender } from "./Sender";
import { Attachment } from "./Attachment";
import { Personalization, Variable } from "../../modules/Email.module";

export class EmailParams {
  from: Sender;
  to: Recipient[];
  cc?: Recipient[];
  bcc?: Recipient[];
  reply_to?: Recipient; 
  subject: string;
  text: string;
  html: string;
  send_at: number; 
  attachments?: Attachment[];
  template_id?: string; 
  in_reply_to?: string; 
  tags?: string[];
  variables?: Variable[];
  personalization?: Personalization[];
  settings?: EmailSettings[];
  precedence_bulk?: boolean;

  constructor(config?: any) {
    this.from = config?.from;
    this.to = config?.to;
    this.cc = config?.cc;
    this.bcc = config?.bcc;
    this.reply_to = config?.replyTo;
    this.in_reply_to = config?.inReplyTo;
    this.subject = config?.subject;
    this.text = config?.text;
    this.html = config?.html;
    this.send_at = config?.sendAt;
    this.attachments = config?.attachments;
    this.template_id = config?.templateId;
    this.tags = config?.tags;
    this.variables = config?.variables;
    this.personalization = config?.personalization;
    this.precedence_bulk = config?.precedenceBulk;
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

  setSendAt(sendAt: number): EmailParams {
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

  setVariables(variables: Variable[]): EmailParams {
    this.variables = variables;
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

  setSettings(settings: EmailSettings[]): EmailParams {
    this.settings = settings;
    return this;
  }
}

export interface EmailSettings {
  track_clicks?: boolean;
  track_opens?: boolean;
  track_content?: boolean;
}
