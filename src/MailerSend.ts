"use strict";
import fetch from "isomorphic-unfetch";

//Email
import email from "./modules/email";
// import tokens from "./modules/tokens.js";
// import activity from "./modules/activity.js";
// import domains from "./modules/domains.js";
// import messages from "./modules/messages.js";
// import recipients from "./modules/recipients.js";
// import templates from "./modules/templates.js";
// import webhooks from "./modules/webhooks.js";
// import emailVerification from "./modules/email-verification";
// import schedules from "./modules/schedules.js";
// import inbounds from "./modules/inbounds.js";

//SMS
// import sms from "./modules/sms.js";
// import smsNumbers from "./modules/sms/numbers.js";
// import smsWebhooks from "./modules/sms/webhooks.js";
// import smsInbounds from "./modules/sms/inbounds.js";
// import smsActivities from "./modules/sms/activities.js";
// import smsMessages from "./modules/sms/messages.js";
// import smsRecipients from "./modules/sms/recipients.js";

let headers = {
  "X-Requested-With": "XMLHttpRequest",
  "Content-type": "application/json",
};

class MailerSend {
  api_key: string
  basePath: string

  constructor(config: {api_key: string}) {
    this.api_key = config.api_key;
    this.basePath = "http://localhost:8080/v1";
    headers.Authorization = `Bearer ${this.api_key}`;

    return Object.assign(
      this,
      email,
      // tokens,
      // activity,
      // domains,
      // messages,
      // recipients,
      // templates,
      // webhooks,
      // emailVerification,
      // schedules,
      // inbounds,
      // sms,
      // smsNumbers,
      // smsWebhooks,
      // smsInbounds,
      // smsActivities,
      // smsMessages,
      // smsRecipients,
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

function serializeQuery(params: [], prefix: string = ''): string {
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
