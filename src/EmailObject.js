"use strict";

module.exports = class EmailObject {
  constructor(emailParams) {
    this.email = {
      from: {
        email: emailParams.from,
        name: emailParams.fromName,
      },
      to: emailParams.recipients,
      cc: emailParams.cc,
      bcc: emailParams.bcc,
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
