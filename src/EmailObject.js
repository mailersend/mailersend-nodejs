"use strict";

module.exports = class EmailObject {
  constructor(emailParams) {
    this.data = {
      from: {
        email: emailParams.from,
        name: emailParams.fromName,
      },
      to: emailParams.recipients,
      cc: emailParams.cc,
      bcc: emailParams.bcc,
      reply_to: emailParams.replyTo,
      attachments: emailParams.attachments,
      subject: emailParams.subject,
      text: emailParams.text,
      html: emailParams.html,
      template_id: emailParams.templateId,
      variables: emailParams.variables,
      personalization: emailParams.personalization,
      tags: emailParams.tags,
    };
  }
};
