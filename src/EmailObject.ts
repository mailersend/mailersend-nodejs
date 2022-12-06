import Attachment from "./Attachment";
import EmailParams from "./EmailParams";
import Recipient from "./Recipient";

type EmailObjectType = {
  from: {
    email: string,
    name: string,
  }
  to: Recipient[]
  cc?: Recipient[]
  bcc?: Recipient[]
  reply_to: {
    email: string,
    name?: string,
  }
  attachments: Attachment[]
  subject: string
  text: string
  html: string
  template_id: number | string
  variables: any
  personalization: any
  tags: string[]
  sendAt: number

}

class EmailObject {
  data: EmailObjectType

  constructor(emailParams: EmailParams) {
    this.data = {
      from: {
        email: emailParams.from,
        name: emailParams.fromName,
      },
      to: emailParams.recipients,
      cc: emailParams.cc,
      bcc: emailParams.bcc,
      reply_to: {
        email: emailParams.replyTo,
        name: emailParams.replyToName,
      },
      attachments: emailParams.attachments,
      subject: emailParams.subject,
      text: emailParams.text,
      html: emailParams.html,
      template_id: emailParams.templateId,
      variables: emailParams.variables,
      personalization: emailParams.personalization,
      tags: emailParams.tags,
      sendAt: emailParams.sendAt,
    };
  }
};

export default EmailObject
