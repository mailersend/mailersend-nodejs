import Attachment from "../../Attachment";
import Recipient from "../../Recipient";
export type EmailParamsType = {
    from: string;
    fromName: string;
    recipients: Recipient[];
    cc?: Recipient[];
    bcc?: Recipient[];
    replyTo: string;
    replyToName?: string;
    attachments: Attachment[];
    subject: string;
    html: string;
    text: string;
    templateId: number | string;
    variables: any;
    personalization: any;
    tags: string[];
    sendAt: number;
};

declare class EmailParams {
    from: string;
    fromName: string;
    recipients: Recipient[];
    cc?: Recipient[];
    bcc?: Recipient[];
    replyTo: string;
    replyToName?: string;
    attachments: Attachment[];
    subject: string;
    html: string;
    text: string;
    templateId: number | string;
    variables: any;
    personalization: any;
    tags: string[];
    sendAt: number;
    constructor(config: EmailParamsType);
    setFrom(from: string): this;
    setFromName(fromName: string): this;
    setRecipients(recipients: Recipient[]): this;
    setAttachments(attachments: Attachment[]): this;
    setCc(cc: Recipient[]): this;
    setBcc(bcc: Recipient[]): this;
    setReplyTo(replyTo: string): this;
    setReplyToName(replyToName: string): this;
    setSubject(subject: string): this;
    setHtml(html: string): this;
    setText(text: string): this;
    setTemplateId(templateId: number | string): this;
    setVariables(variables: any): this;
    setPersonalization(personalization: any): this;
    setTags(tags: string[]): this;
    setSendAt(sendAt: number): this;
}

export default EmailParams;
