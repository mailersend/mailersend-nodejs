"use strict";
const fetch = require("isomorphic-unfetch");

//Email
const email = require("./modules/email.js");
const tokens = require("./modules/tokens.js");
const activity = require("./modules/activity.js");
const domains = require("./modules/domains.js");
const messages = require("./modules/messages.js");
const recipients = require("./modules/recipients.js");
const templates = require("./modules/templates.js");
const webhooks = require("./modules/webhooks.js");
const emailVerification = require("./modules/email-verification");
const schedules = require("./modules/schedules.js");
const inbounds = require("./modules/inbounds.js");

//SMS
const sms = require("./modules/sms.js");
const smsNumbers = require("./modules/sms/numbers.js");
const smsWebhooks = require("./modules/sms/webhooks.js");
const smsInbounds = require("./modules/sms/inbounds.js");
const smsActivities = require("./modules/sms/activities.js");
const smsMessages = require("./modules/sms/messages.js");
const smsRecipients = require("./modules/sms/recipients.js");

let headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-type": "application/json",
};

module.exports = class MailerSend {
  constructor(config) {
    this.api_key = config.api_key;
    this.basePath = "https://api.mailersend.com/v1";
    headers.Authorization = `Bearer ${this.api_key}`;

    return Object.assign(
      this,
      email,
      tokens,
      activity,
      domains,
      messages,
      recipients,
      templates,
      webhooks,
      emailVerification,
      schedules,
      inbounds,
      sms,
      smsNumbers,
      smsWebhooks,
      smsInbounds,
      smsActivities,
      smsMessages,
      smsRecipients,
    )
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
};

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
