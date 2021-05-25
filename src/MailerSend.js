"use strict";

function serializeQuery(params, prefix) {
  const query = Object.keys(params).map((key) => {
    const value  = params[key];

    if (params.constructor === Array)
      key = `${prefix}[]`;
    else if (params.constructor === Object)
      key = (prefix ? `${prefix}[${key}]` : key);

    if (typeof value === 'object')
      return serializeQuery(value, key);
    else
      return `${key}=${encodeURIComponent(value)}`;
  });

  return [].concat.apply([], query).join('&')
}

const fetch = require("isomorphic-unfetch");

const email = require("./modules/email.js");
const tokens = require("./modules/tokens.js");
const activity = require("./modules/activity.js");
const domains = require("./modules/domains.js");

let headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-type": "application/json",
};
module.exports = class MailerSend {
  constructor(config) {
    this.api_key = config.api_key;
    this.basePath = "https://api.mailersend.com/v1";
    headers.Authorization = `Bearer ${this.api_key}`;

    return Object.assign(this, email, tokens, activity, domains)
  }

  request(endpoint = "", options = {}) {
    const { headers = {}, method = 'GET', body = null, params = {}} = options

    let queryString = serializeQuery(params)
    queryString = queryString ? `?${queryString}` : ''

    return fetch(this.basePath + endpoint + queryString, {
      method,

      headers: {
        ...headers,
        Authorization: `Bearer ${this.api_key}`,
        "X-Requested-With": "XMLHttpRequest",
        "Content-type": "application/json",
      },

      body: body && JSON.stringify(body)
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
