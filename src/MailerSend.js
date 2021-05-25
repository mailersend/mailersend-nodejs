"use strict";

const fetch = require("isomorphic-unfetch");

const email = require("./modules/email.js");
const tokens = require("./modules/tokens.js");
const activity = require("./modules/activity.js");

let headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-type": "application/json",
};
module.exports = class MailerSend {
  constructor(config) {
    this.api_key = config.api_key;
    this.basePath = "https://api.mailersend.com/v1";
    headers.Authorization = `Bearer ${this.api_key}`;

    return Object.assign(this, email, tokens, activity)
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
    if (!message_id) {
      throw new Error("Please provide a valid message_id");
    }

    const response = await axios.get(
      this.basePath + `/messages/${message_id}`,
      { headers }
    );

    return response.data;
  }


};
