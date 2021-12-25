import fetch from 'isomorphic-unfetch';

import { email } from './modules/email';
import { tokens } from './modules/tokens';
import { activity } from './modules/activity';
import { domains } from './modules/domains';
import { messages } from './modules/messages';
import { recipients } from './modules/recipients';
import { templates } from './modules/templates';
import { webhooks } from './modules/webhooks';

let headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-type': 'application/json',
};

export class MailerSend {
  constructor(config) {
    this.api_key = config.api_key;
    this.basePath = 'https://api.mailersend.com/v1';
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
    );
  }

  request(endpoint = '', options = {}) {
    const { headers = {}, method = 'GET', body = null, params = {} } = options;

    let queryString = serializeQuery(params);
    queryString = queryString ? `?${queryString}` : '';

    return fetch(this.basePath + endpoint + queryString, {
      method,

      headers: {
        ...headers,
        Authorization: `Bearer ${this.api_key}`,
        'X-Requested-With': 'XMLHttpRequest',
        'Content-type': 'application/json',
      },

      body: body && JSON.stringify(body),
    });
  }
}

function serializeQuery(params, prefix) {
  const query = Object.keys(params).map(key => {
    const value = params[key];

    if (params.constructor === Array) key = `${prefix}[]`;
    else if (params.constructor === Object) key = prefix ? `${prefix}[${key}]` : key;

    if (typeof value === 'object') return serializeQuery(value, key);
    else return `${key}=${encodeURIComponent(value)}`;
  });

  return [].concat.apply([], query).join('&');
}
