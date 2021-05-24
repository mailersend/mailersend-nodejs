"use strict";

const axios = require("axios");

let headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-type": "application/json",
};

const checkParam = (param) => {
  if (!param) {
    let err = new Error("Please provide a valid value");
    throw err;
  }
};

module.exports = class MailerSend {
  constructor(config) {
    this.api_key = config.api_key;
    this.basePath = "https://api.mailersend.com/v1";
    headers.Authorization = `Bearer ${this.api_key}`;
  }

  //EMAILS
  send(emailParams) {
    return axios.post(this.basePath + "/email", {
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
    }, {
      headers
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

  //TOKENS
  async createToken(createTokenParams) {
    const { name, scopes, domain_id } = createTokenParams;

    const scopesArray = [
      "email_full",
      "domains_read",
      "domains_full",
      "activity_read",
      "activity_full",
      "analytics_read",
      "analytics_full",
      "tokens_full",
    ];

    //Check for required values name and scopes
    if (!name || !scopes || !domain_id) {
      err = new Error(
        "Please include a name, domain_id and scopes in your request"
      );
      throw err;
    }

    //Check if scopes have values
    if (scopes.length < 1) {
      throw new Error("You need to add at least 1 scope");
    }

    //Check if all values in scopes array are valid.
    for (let i = 0; i < scopes.length; i++) {
      const scope = scopes[i];
      if (!scopesArray.includes(scope)) {
        throw new Error(`"${scope}" is not a valid value for scopes`);
      }
    }

    //Check if name value is not bigger than 191 characters
    if (name.length > 191) {
      throw new Error("Token name has to be less than 191 characters");
    }

    const response = await axios.post(this.basePath + "/token", createTokenParams, {
      headers,
    });

    return response.data;
  }

  updateToken(updateTokenParams) {
    const { token_id, status } = updateTokenParams;

    if (!token_id) {
      throw new Error("Please provide a valid token_id");
    }

    if (!['pause', 'unpause'].includes(status)) {
      throw new Error("Please provide a valid status");
    }

    return axios.put(`${this.basePath}/token/${token_id}/settings`, {
      status: status,
    }, {
      headers,
    });
  }

  //Delete Token
  async deleteToken(deleteTokenParams) {
    const { token_id } = deleteTokenParams;

    //Check if token_id was provided
    if (!token_id) {
      throw new Error("Please provide a valid token_id");
    }

    const response = await axios.delete(`${this.basePath}/token/${token_id}`, {
      headers,
    });

    return response.data;
  }

  //MESSAGES
  //Get List of Messages
  async getMessages(messagesParams) {
    const response = await axios.get(this.basePath + "/messages", {
      headers,
      params: {
        page: messagesParams.page,
        limit: messagesParams.limit,
      },
    });
    return response.data;
  }

  //Get Single Message info
  async getMessage(message_id) {
    //Check if message ID was provided
    checkParam(message_id);

    const response = await axios.get(
      this.basePath + `/messages/${message_id}`,
      { headers }
    );

    return response.data;
  }


};
