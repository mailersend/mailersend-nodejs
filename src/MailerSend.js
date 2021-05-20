"use strict";

const fetch = require("isomorphic-unfetch");
const axios = require("axios");

let headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-type": "application/json",
};

module.exports = class MailerSend {
  constructor(config) {
    this.api_key = config.api_key;
    this.basePath = "https://api.mailersend.com/v1";
    headers.Authorization = `Bearer ${this.api_key}`;
  }

  request(endpoint = "", options = {}) {
    const url = this.basePath + endpoint;

    const config = {
      headers,
      ...options,
    };

    return fetch(url, config);
  }

  //EMAILS
  send(emailParams) {
    return this.request("/email", {
      method: "POST",
      body: JSON.stringify({
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
      }),
    });
  }

  //RECIPIENTS
  async getRecipients(recipientParams) {
    const response = await axios.get(this.basePath + "/recipients", {
      headers,
      params: {
        page: recipientParams.page,
        limit: recipientParams.limit,
      },
    });
    return response.data;
  }

  async getRecipient(recipientId) {
    const response = await axios.get(
      this.basePath + "/recipients" + `/${recipientId}`,
      {
        headers,
      }
    );
    return response.data;
  }

  async deleteRecipient(recipientId) {
    const response = await axios.delete(
      this.basePath + "/recipients" + `/${recipientId}`,
      {
        headers,
      }
    );
    return response.data;
  }
};
