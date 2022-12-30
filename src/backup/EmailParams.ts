import Attachment from "./Attachment";
import Recipient from "./Recipient";

export type EmailParamsType = {
  from: string
  fromName: string
  recipients: Recipient[]
  cc?: Recipient[]
  bcc?: Recipient[]
  replyTo: string
  replyToName?: string
  attachments: Attachment[]
  subject: string
  html: string
  text: string
  templateId: number | string
  variables: any
  personalization: any
  tags: string[]
  sendAt: number
}

class EmailParams {
  from: string
  fromName: string
  recipients: Recipient[]
  cc?: Recipient[]
  bcc?: Recipient[]
  replyTo: string
  replyToName?: string
  attachments: Attachment[]
  subject: string
  html: string
  text: string
  templateId: number | string
  variables: any
  personalization: any
  tags: string[]
  sendAt: number

  constructor(config: EmailParamsType) {
    this.setFrom(config.from);
    this.fromName = config.fromName;
    this.recipients = config.recipients;
    this.cc = config.cc;
    this.bcc = config.bcc;
    this.replyTo = config.replyTo;
    this.replyToName = config.replyToName;
    this.attachments = config.attachments;
    this.subject = config.subject;
    this.html = config.html;
    this.text = config.text;
    this.templateId = config.templateId;
    this.variables = config.variables;
    this.personalization = config.personalization;
    this.tags = config.tags;
    this.sendAt = config.sendAt;

    return this;
  }

  setFrom(from: string): this {
    this.from = from;

    return this;
  }

  setFromName(fromName: string): this {
    this.fromName = fromName;

    return this;
  }

  setRecipients(recipients: Recipient[]): this {
    this.recipients = recipients;

    return this;
  }

  setAttachments(attachments: Attachment[]): this {
    this.attachments = attachments;

    return this;
  }

  setCc(cc: Recipient[]): this {
    this.cc = cc;

    return this;
  }

  setBcc(bcc: Recipient[]): this {
    this.bcc = bcc;

    return this;
  }

  setReplyTo(replyTo: string): this {
    this.replyTo = replyTo;

    return this;
  }

  setReplyToName(replyToName: string): this {
    this.replyToName = replyToName;

    return this;
  }

  setSubject(subject: string): this {
    this.subject = subject;

    return this;
  }

  setHtml(html: string): this {
    this.html = html;

    return this;
  }

  setText(text: string): this {
    this.text = text;

    return this;
  }

  setTemplateId(templateId: number | string): this {
    this.templateId = templateId;

    return this;
  }

  setVariables(variables: any): this {
    this.variables = variables;

    return this;
  }

  setPersonalization(personalization: any): this {
    this.personalization = personalization;

    return this;
  }

  setTags(tags: string[]): this {
    this.tags = tags;

    return this;
  }

  setSendAt(sendAt: number): this {
    this.sendAt = sendAt;

    return this;
  }
};

export default EmailParams
