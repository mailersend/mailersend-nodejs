"use strict";

const fetch = require("isomorphic-unfetch");
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

  //TOKENS
  async createToken(token) {
    let err;
    const { name, scopes, domain_id } = token;
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
      err = new Error("You need to add at least 1 scope");
      throw err;
    }

    //Check if all values in scopes array are valid.
    for (let i = 0; i < scopes.length; i++) {
      const scope = scopes[i];
      if (!scopesArray.includes(scope)) {
        err = new Error(`"${scope}" is not a valid value for scopes`);
        throw err;
      }
    }

    //Check if name value is not bigger than 191 characters
    if (name.length > 191) {
      err = new Error("Token name has to be less than 191 characters");
      throw err;
    }

    const response = await axios.post(this.basePath + "/token", token, {
      headers,
    });
    return response.data.data;
  }

  //Pause Token
  async pauseToken(token_id) {
    let err;

    //Check if token_id was provided
    if (!token_id) {
      err = new Error("Please provide a valid token_id");
      throw err;
    }

    const response = await axios.put(
      `${this.basePath}/token/${token_id}/settings`,
      {
        status: "pause",
      },
      {
        headers,
      }
    );

    return response.data.data;
  }

  //Unpause Token
  async unpauseToken(token_id) {
    //Check if token_id was provided
    checkParam(token_id);

    const response = await axios.delete(
      `${this.basePath}/token/${token_id}/settings`,
      {
        status: "unpause",
      },
      {
        headers,
      }
    );

    return response.data;
  }

  //Delete Token
  async deleteToken(token_id) {
    //Check if token_id was provided
    checkParam(token_id);

    const response = await axios.delete(`${this.basePath}/token/${token_id}`, {
      headers,
    });

    return response;
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
