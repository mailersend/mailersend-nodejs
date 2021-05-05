"use strict";

const fetch = require("isomorphic-unfetch");

module.exports = class MailerSend {
  constructor(config) {
    this.api_key = config.api_key;
    this.basePath = "https://api.mailersend.com/v1";
  }

  request(endpoint = "", options = {}) {
    const url = this.basePath + endpoint;

    const headers = {
      Authorization: `Bearer ${this.api_key}`,
      "X-Requested-With": "XMLHttpRequest",
      "Content-type": "application/json",
    };

    const config = {
      headers,
      ...options,
    };

    return fetch(url, config);
  }

  send(emailParams) {
    return this.request("/email", {
      method: "POST",
      body: JSON.stringify({
        from: {
          email: emailParams.from,
          name: emailParams.fromName,
        },
        to: emailParams.recipients,
        subject: emailParams.subject,
        text: emailParams.text,
        html: emailParams.html,
        template_id: emailParams.templateId,
        variables: emailParams.variables,
        personalization: emailParams.personalization,
        tags: emailParams.tags,
      }),
    });
  }
};
